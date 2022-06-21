const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => res.send("welcome Home"))

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))