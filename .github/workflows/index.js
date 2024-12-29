const fs = require("fs");
const path = require("path");
const resultPath = path.resolve(
  ".github/workflows/cypress/results/mochawesome.json"
);

// Read the JSON results file
fs.readFile(resultPath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
