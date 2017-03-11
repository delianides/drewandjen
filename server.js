const dev = process.env.NODE_ENV !== "production";

let STATIC = "/static";
if (!dev) STATIC = "//d16anjvf8exjxs.cloudfront.net/drewandjen/static";

// currently webpack config with next doesn't transform the
// server bundle so define plugin won't work
// hence global party
global.STATIC = STATIC;

const moduleAlias = require("module-alias");

if (!dev) {
  moduleAlias.addAlias("react", "preact-compat");
  moduleAlias.addAlias("react-dom", "preact-compat");
}

const express = require("express");
const compression = require("compression");
const LRUCache = require("lru-cache");
const next = require("next");
const { parse } = require("url");
const path = require("path");

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 720, // one month
});

function renderAndCache(req, res, pagePath, queryParams) {
  if (ssrCache.has(req.url)) {
    res.send(ssrCache.get(req.url));
    return;
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      ssrCache.set(req.url, html);

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  // server.get("/", (req, res) => renderAndCache(req, res, "/"));

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(process.env.PORT || 3000, () => {
    console.log(`>> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
});
