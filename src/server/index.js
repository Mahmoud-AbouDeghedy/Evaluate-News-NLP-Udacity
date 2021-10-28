const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const mockAPIResponse = require("./mockAPI.js");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

console.log(__dirname);

const URL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.key;
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
let input;
app.post("/api", async function (req, res) {
  input = req.body.url;
  const apiURL = `${URL}key=${apiKey}&url=${input}&lang=en`;
  const response = await fetch(apiURL);
  const data = await response.json();
  res.send(data);
});
