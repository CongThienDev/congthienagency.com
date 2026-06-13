const fs = require("fs");
const os = require("os");
const path = require("path");
const { PNG } = require("pngjs");
const potrace = require("potrace");

const SOURCE = process.argv[2];
const OUTPUT = process.argv[3] || path.resolve("public/logo/cong-thien-agency-signature.svg");

if (!SOURCE) {
  console.error("Usage: node scripts/generate-logo-svg.cjs <source.png> [output.svg]");
  process.exit(1);
}

const sourcePng = PNG.sync.read(fs.readFileSync(SOURCE));
const { width, height, data } = sourcePng;
const mask = new Uint8Array(width * height);

function isForeground(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max - min;
  const darkness = 255 - (r + g + b) / 3;
  const blueBias = b - (r + g) / 2;

  return (darkness > 35 && blueBias > 8) || (darkness > 55 && saturation > 12);
}

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const index = (y * width + x) * 4;
    mask[y * width + x] = isForeground(data[index], data[index + 1], data[index + 2]) ? 1 : 0;
  }
}

const visited = new Uint8Array(width * height);
const components = [];

for (let start = 0; start < mask.length; start += 1) {
  if (!mask[start] || visited[start]) continue;

  const queue = [start];
  visited[start] = 1;

  let head = 0;
  let area = 0;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  const pixels = [];

  while (head < queue.length) {
    const current = queue[head];
    head += 1;

    const x = current % width;
    const y = Math.floor(current / width);
    pixels.push(current);
    area += 1;

    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;

    if (x + 1 < width) {
      const next = current + 1;
      if (mask[next] && !visited[next]) {
        visited[next] = 1;
        queue.push(next);
      }
    }

    if (x > 0) {
      const next = current - 1;
      if (mask[next] && !visited[next]) {
        visited[next] = 1;
        queue.push(next);
      }
    }

    if (y + 1 < height) {
      const next = current + width;
      if (mask[next] && !visited[next]) {
        visited[next] = 1;
        queue.push(next);
      }
    }

    if (y > 0) {
      const next = current - width;
      if (mask[next] && !visited[next]) {
        visited[next] = 1;
        queue.push(next);
      }
    }
  }

  components.push({
    area,
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
    pixels,
  });
}

const kept = components.filter((component) => {
  if (component.area < 500) return false;
  if (component.minY >= 1400 && component.width <= 220 && component.height <= 40) return false;
  return true;
});

if (!kept.length) {
  console.error("No logo pixels were detected.");
  process.exit(1);
}

let cropMinX = width;
let cropMinY = height;
let cropMaxX = 0;
let cropMaxY = 0;

for (const component of kept) {
  if (component.minX < cropMinX) cropMinX = component.minX;
  if (component.minY < cropMinY) cropMinY = component.minY;
  if (component.maxX > cropMaxX) cropMaxX = component.maxX;
  if (component.maxY > cropMaxY) cropMaxY = component.maxY;
}

const padding = 32;
cropMinX = Math.max(0, cropMinX - padding);
cropMinY = Math.max(0, cropMinY - padding);
cropMaxX = Math.min(width - 1, cropMaxX + padding);
cropMaxY = Math.min(height - 1, cropMaxY + padding);

const croppedWidth = cropMaxX - cropMinX + 1;
const croppedHeight = cropMaxY - cropMinY + 1;
const outPng = new PNG({ width: croppedWidth, height: croppedHeight });

for (let i = 0; i < outPng.data.length; i += 4) {
  outPng.data[i] = 255;
  outPng.data[i + 1] = 255;
  outPng.data[i + 2] = 255;
  outPng.data[i + 3] = 255;
}

for (const component of kept) {
  for (const pixelIndex of component.pixels) {
    const x = pixelIndex % width;
    const y = Math.floor(pixelIndex / width);
    const outIndex = ((y - cropMinY) * croppedWidth + (x - cropMinX)) * 4;

    outPng.data[outIndex] = 56;
    outPng.data[outIndex + 1] = 56;
    outPng.data[outIndex + 2] = 56;
    outPng.data[outIndex + 3] = 255;
  }
}

const tempMaskPath = path.join(os.tmpdir(), `cong-thien-logo-mask-${Date.now()}.png`);
fs.writeFileSync(tempMaskPath, PNG.sync.write(outPng));

function traceMask(maskPath) {
  return new Promise((resolve, reject) => {
    potrace.trace(
      maskPath,
      {
        turdSize: 20,
        optCurve: true,
        alphaMax: 0.85,
        threshold: 180,
        color: "#000000",
        background: "transparent",
      },
      (error, svg) => {
        if (error) reject(error);
        else resolve(svg);
      },
    );
  });
}

async function main() {
  const tracedSvg = await traceMask(tempMaskPath);
  const cleanedSvg = tracedSvg
    .replace(/fill="black"/g, 'fill="currentColor"')
    .replace(
      /<svg /,
      '<svg role="img" aria-label="Cong Thien Agency signature logo" fill="currentColor" ',
    );

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, cleanedSvg);
  fs.rmSync(tempMaskPath, { force: true });

  console.log(`Generated ${OUTPUT}`);
}

main().catch((error) => {
  fs.rmSync(tempMaskPath, { force: true });
  console.error(error);
  process.exit(1);
});
