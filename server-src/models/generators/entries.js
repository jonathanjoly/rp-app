const createEqualRange = require("./range").createEqualRange;

function createEntry(range, value) {
  return { range, value };
}

function simpleItemToEntry(value, index) {
  return createEntry(createEqualRange(index), value);
}

function simpleItemsToEntry(items) {
  return items.map((item, index) => simpleItemToEntry(item, index));
}

module.exports = {
  createEntry,
  simpleItemToEntry,
  simpleItemsToEntry,
};
