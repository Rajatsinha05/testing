const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the world!");
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("listening on port " + PORT + "...");
});
