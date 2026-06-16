import { NextResponse } from "next/server";
import { SITE } from "@/content/site";
import { getAllIndexablePages } from "@/lib/siteIndex";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY = "8760a56477e14e2aa2a6380ea67fa4da";
const BATCH_SIZE = 10000;

function isAuthorized(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;

  if (!secret) {
    return true;
  }

  const authorization = request.headers.get("authorization");
  const bearerToken = authorization?.replace(/^Bearer\s+/i, "");

  return bearerToken === secret || request.headers.get("x-indexnow-secret") === secret;
}

async function submitUrls(urlList: string[]) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: SITE.domain,
      key: KEY,
      keyLocation: `${SITE.url}/${KEY}.txt`,
      urlList,
    }),
  });

  const body = await response.text();

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    body,
  };
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urls = [...new Set(getAllIndexablePages().map((page) => `${SITE.url}${page.path}`))];
  const results = [];

  for (let start = 0; start < urls.length; start += BATCH_SIZE) {
    const urlList = urls.slice(start, start + BATCH_SIZE);
    const result = await submitUrls(urlList);

    results.push({
      count: urlList.length,
      ...result,
    });

    if (!result.ok) {
      return NextResponse.json(
        {
          submitted: false,
          totalUrls: urls.length,
          results,
        },
        { status: result.status },
      );
    }
  }

  return NextResponse.json({
    submitted: true,
    totalUrls: urls.length,
    results,
  });
}
