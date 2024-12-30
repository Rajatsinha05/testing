require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8090;



const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the world!");
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT + "...");
});
