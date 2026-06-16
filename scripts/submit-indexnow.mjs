const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const SITE_URL = "https://www.congthienagency.com";
const HOST = "www.congthienagency.com";
const KEY = "8760a56477e14e2aa2a6380ea67fa4da";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const BATCH_SIZE = 10000;

const shouldSubmit = process.argv.includes("--submit");

function parseSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => {
      try {
        return new URL(url).host === HOST;
      } catch {
        return false;
      }
    });
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "congthienagency-indexnow/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function submitBatch(urlList) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      `IndexNow rejected ${urlList.length} URLs: ${response.status} ${response.statusText}${responseText ? ` - ${responseText}` : ""}`,
    );
  }

  return {
    status: response.status,
    statusText: response.statusText,
    body: responseText,
  };
}

async function main() {
  const sitemapXml = await fetchText(SITEMAP_URL);
  const urls = [...new Set(parseSitemapUrls(sitemapXml))];

  if (urls.length === 0) {
    throw new Error(`No URLs found in ${SITEMAP_URL}`);
  }

  console.log(`Found ${urls.length} URLs in ${SITEMAP_URL}`);
  urls.forEach((url) => console.log(url));

  if (!shouldSubmit) {
    console.log("\nDry run only. Run `npm run indexnow -- --submit` to submit these URLs.");
    return;
  }

  for (let start = 0; start < urls.length; start += BATCH_SIZE) {
    const batch = urls.slice(start, start + BATCH_SIZE);
    const result = await submitBatch(batch);
    console.log(
      `Submitted batch ${start / BATCH_SIZE + 1}: ${batch.length} URLs (${result.status} ${result.statusText})`,
    );
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
