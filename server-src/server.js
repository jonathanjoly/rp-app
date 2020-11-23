console.log("Launch server");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const diceRouter = require("./api/dices");
const generatorsRouter = require("./api/generators");
const tablesRouter = require("./api/tables");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  next();
});

dotenv.config();

app.listen(4000, () => console.log("Service started"));
app.use(cors());
app.use("/dice", diceRouter);
app.use("/generators", generatorsRouter);
app.use("/tables", tablesRouter);
