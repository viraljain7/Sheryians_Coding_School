const express = require("express");
const app = express();

app.use(function (req, res, next) {
  //Arrow function use mat karna
  console.log("middleware");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World Middleware");
});

app.get("/post", function (req, res) {
  res.send("Hello Post ");
});

app.listen(3000);
