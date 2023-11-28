const express = require("express");
const app = express();
//req me user se data lete hai
//res me user ko data dete hai
app.use(function (req, res, next) {
  //Arrow function use mat karna
  console.log("middleware");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World Middleware");
});

app.get("/post/:username", function (req, res) {
  res.send(`Hello Post ${req.params.username} `);
});

app.listen(3000);
