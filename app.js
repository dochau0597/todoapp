const express = require("express");
const bodyParser = require("body-parser");

const app = new express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("Todo App on Port 3000"));

app.get("/", (req, res) => {
  res.send("Hello");
});
