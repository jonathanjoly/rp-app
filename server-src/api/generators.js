const express = require("express");
const router = express.Router();
const GeneratorsService = require("../services/generators/generators");

 
router.get("/", async function (_, res) {
  res.send(await GeneratorsService.getGenerators());
});

router.get("/:generator", async function (req, res) {
  const generator = await GeneratorsService.getGenerator(req.params.generator);
  res.send(generator);
});

router.put("/", async function (req, res) {
  const up = await GeneratorsService.updateGenerator(
    req.body.id,
    { name: req.body.name, tables: req.body.tables },
  );

  res.send(up);
});

router.post("/", async function (req, res) {
  const newRecord = await GeneratorsService.insertGenerator(req.body);
  res.send(newRecord);
});

module.exports = router;
