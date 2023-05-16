const express = require("express");
require("dotenv").config();
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html", {
    apiKey: "211b7bc4-524b-400f-84a4-e765e7410c86",
  });
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
});

const port = process.env.PORT || 3000;
console.log("Path is ." + path);
console.log("Directory is ." + __dirname);
console.log("API Key is ." + process.env.SAWO_API_KEY);

app.listen(port, console.log("Listening on port" + process.env.HOST));
