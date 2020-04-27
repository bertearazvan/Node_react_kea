const express = require("express");
const app = express();
const fs = require("fs");

const PORT = process.env.PORT || 80;

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.status(200).sendFile(__dirname + "/public/staticFile.html");
});

const ssrPage = fs.readFileSync("public/ssrFile.html", "utf8");

app.get("/ssr", (req, res) => {
  return res.status(200).send(ssrPage);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is listening on port ${PORT}...`);
});
