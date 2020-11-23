const TablesModel = require("../../models/tables");

function createTable(name, entries) {
  return { name, entries };
}

function getSelectedTables(tableIds) {
  return TablesModel.getSelectedTables(tableIds);
}

function getTable(tableId) {
  return TablesModel.getTable( tableId);
}

function getTables() {
  return TablesModel.getTables();
}

function insertTable(newTable) {
  return TablesModel.insertTable(newTable);
}

function updateTable(tableId, newTable) {
  return TablesModel.updateTable( tableId, newTable);
}



module.exports = {
  createTable,
  getSelectedTables,
  getTable,
  getTables,
  insertTable,
  updateTable
};
