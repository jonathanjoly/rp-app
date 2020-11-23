const express = require("express");
const DicesService = require("../services/dices");
const router = express.Router();

router.get("/:dice", function (req, res) {
  res.send({
    dices: DicesService.launchDices(req.params.dice),
  });
});

module.exports = router;
