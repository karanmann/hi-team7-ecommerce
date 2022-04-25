const express = require("express");
const mongoose = require("mongoose");

const data = require("./data/data.json");
let error1 = "";

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.get("/data", (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    error1 = "Some Error";
  }
  console.log(error1);
});

app.get("/error", (req, res) => {
  res.send(error1);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
