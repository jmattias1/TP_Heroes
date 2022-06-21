const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./views/home.html")));
app.get("/babbage", (req, res) => res.sendFile(path.join(__dirname, "./views/babbage.html")));

app.listen(port, () => console.log(`Server esta corriendo en http://localhost:` + port));