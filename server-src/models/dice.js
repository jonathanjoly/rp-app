const LD = require("lodash");

function launchDice(numberOfFace) {
  return Math.round(Math.random() * (numberOfFace - 1)) + 1;
}

function launchDices(dices) {
  const launch = interprateDices(dices);
  const launchResult = [];

  for (let i = 0; i < launch.numberOfDices; i++) {
    launchResult.push(launchDice(launch.numberOfFaces));
  }

  return launchResult;
}

function interprateDices(dices) {
  const parts = dices.replace("d", "D").split("D");

  if (parts.length === 1) {
    return {
      numberOfDices: 1,
      numberOfFaces: LD.toNumber(parts[0]),
    };
  }
  return {
    numberOfDices: LD.toNumber(parts[0]),
    numberOfFaces: LD.toNumber(parts[1]),
  };
}

module.exports = { launchDices };
