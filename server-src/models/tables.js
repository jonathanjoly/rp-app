const Db = require("./connection");

const TABLES = "tables";

function getTable(tableId) {
  return Db.get(TABLES, tableId);
}

function getSelectedTables(tableIds) {
  return new Promise((resolve) => {
    const promises = tableIds.map((tableId) => {
      return getTable(tableId);
    });
    Promise.all(promises).then((res) => {
      resolve(res);
    });
  });
}

function getTables() {
  return Db.getAll(TABLES);
}

function updateTable(tableId, newTable) {
  return Db.update(TABLES, tableId, newTable);
}

function insertTable(newTable) {
  return Db.insert(TABLES, newTable);
}

module.exports = {
  getTable,
  getTables,
  getSelectedTables,
  updateTable,
  insertTable,
};
