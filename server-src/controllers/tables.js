const express = require("express");
const router = express.Router();
const GeneratorDao = require("../dao/generators");
const TablesDao = require("../dao/tables");

router.get("/", async function (req, res) {
  const tables = await TablesDao.getTables();
  res.send(tables);
});

router.get("/:table", async function (req, res) {
  const table = await TablesDao.getTable(req.params.table);
  res.send(table);
});

router.put("/", async function (req, res) {
  const up = await TablesDao.updateTable(
    req.body.id,
    { name: req.body.name, entries: req.body.entries },
  );

  res.send(up);
});

router.post("/", async function (req, res) {
  const newRecord = await TablesDao.insertTable(req.body);
  res.send(newRecord);
});

module.exports = router;
