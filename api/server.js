import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let serverEntry;

async function getServerEntry() {
  if (!serverEntry) {
    try {
      const module = await import(join(__dirname, "../dist/server/index.js"));
      serverEntry = module.default;
    } catch (error) {
      console.error("Failed to load server entry:", error);
      throw error;
    }
  }

  return serverEntry;
}

function createRequest(req) {
  const url = new URL(req.url, `https://${req.headers.host}`);

  if (url.pathname === "/api") {
    url.pathname = "/";
  } else if (url.pathname.startsWith("/api/")) {
    url.pathname = url.pathname.slice("/api".length);
  }

  return new Request(url, {
    method: req.method,
    headers: req.headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
    duplex: "half",
  });
}

export default async function handler(req, res) {
  try {
    const server = await getServerEntry();
    const response = await server.fetch(createRequest(req), {}, {});

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    res.status(response.status);

    if (response.body) {
      const buffer = await response.arrayBuffer();
      res.end(Buffer.from(buffer));
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
