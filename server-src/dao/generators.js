const Db = require("../connection");

const GENERATORS = "generators";

function getGenerators() {
  return Db.getAll(GENERATORS);
}

function getGenerator(generatorId) {
  return Db.get(GENERATORS, generatorId);
}

function updateGenerator(generatorId, newGenerator) {
  return Db.update(GENERATORS, generatorId, newGenerator);
}

function insertGenerator(newGenerator) {
  return Db.insert(GENERATORS, newGenerator);
}

module.exports = {
  getGenerator,
  getGenerators,
  updateGenerator,
  insertGenerator,
};
