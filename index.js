const express = require("express");
const fs = require("fs");
const papa = require("papaparse");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("./data/4_kaoqintype.csv", (err, data) => {
    if (err) throw err;
    const result = papa.parse(data.toString(), {
      delimiter: ",",
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      encoding: "utf-8"
    }).data;
    res.location("./html/calendar.html");
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening Port ${port}`);
});
