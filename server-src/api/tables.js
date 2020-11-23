const express = require("express");
const router = express.Router();
const TablesService = require("../services/generators/tables");

router.get("/", async function (_, res) {
  const tables = await TablesService.getTables();
  res.send(tables);
});

router.get("/:table", async function (req, res) {
  const table = await TablesService.getTable(req.params.table);
  res.send(table);
});

router.put("/", async function (req, res) {
  const up = await TablesService.updateTable(
    req.body.id,
    { name: req.body.name, entries: req.body.entries },
  );

  res.send(up);
});

router.post("/", async function (req, res) {
  const newRecord = await TablesService.insertTable(req.body);
  res.send(newRecord);
});

module.exports = router;
