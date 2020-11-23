const GeneratorsModel = require("../../models/generators");
const TablesServices = require("./tables");

function createGenerators(name, tables) {
  return { name, tables };
}

function getGenerators() {
  return GeneratorsModel.getGenerators();
}

async function getGenerator(id) {
  const generator = await GeneratorsModel.getGenerator(id);
  generator.tables = await TablesServices.getSelectedTables(generator.tables);
  return generator;
}

function updateGenerator(id, generator) {
  return GeneratorsModel.updateGenerator(id, generator);
}

function insertGenerator(generator) {
  return GeneratorsModel.insertGenerator(generator);
}

module.exports = {
  createGenerators,
  getGenerators,
  getGenerator,
  insertGenerator,
  updateGenerator
};
 