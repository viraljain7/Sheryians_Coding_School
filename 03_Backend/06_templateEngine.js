const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("middleware");
  next();
});

app.set("view engine", "ejs"); //template engine
app.use(express.static("./public")); //Static Pages

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  res.render("conatct", { msg: 14 });
});

app.get("/post/:username", function (req, res) {
  res.send(`Hello Post ${req.params.username} `);
});

app.listen(3000);
