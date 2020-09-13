const express = require("express");
const Dice = require("../models/dice");
const router = express.Router();

router.get("/:dice", function (req, res) {
  res.send({
    dices: Dice.launchDices(req.params.dice),
  });
});

module.exports = router;
