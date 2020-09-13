function createRange(start, end) {
  return { start, end };
}

function createEqualRange(value) {
  return createRange(value, value);
}

module.exports = {
  createRange,
  createEqualRange,
};
