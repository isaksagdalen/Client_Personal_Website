const express = require("express");
const prerender = require("prerender-node");
const path = require("path");
const app = express();

app.use(
  require("prerender-node").set("prerenderToken", "TFBiRy7DjbfcgJQ4Yb0c")
);

app.use(prerender);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
