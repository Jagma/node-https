var express = require("express");
var fs = require("fs");
var https = require("https");
var app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(3000, function () {
    console.log(
      "Example app listening on port 3000! Go to https://localhost:3000/"
    );
  });