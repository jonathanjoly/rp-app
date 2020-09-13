const express = require("express");
const router = express.Router();
const GeneratorDao = require("../dao/generators");
const TablesDao = require("../dao/tables");

router.get("/", async function (req, res) {
  res.send(await GeneratorDao.getGenerators());
});

router.get("/:generator", async function (req, res) {
  const generator = await GeneratorDao.getGenerator(req.params.generator);
  generator.tables = await TablesDao.getSelectedTables(generator.tables);

  res.send(generator);
});

router.put("/", async function (req, res) {
  const up = await GeneratorDao.updateGenerator(
    req.body.id,
    { name: req.body.name, tables: req.body.tables },
  );

  res.send(up);
});

router.post("/", async function (req, res) {
  const newRecord = await GeneratorDao.insertGenerator(req.body);
  res.send(newRecord);
});

module.exports = router;
