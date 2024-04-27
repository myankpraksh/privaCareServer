const express = require("express");
const mongoose = require("mongoose");
//const cors = require("cors");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("working");
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
