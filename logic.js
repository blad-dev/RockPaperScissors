'use strict';

function scaledRandomInteger(maxRandom) {
  return Math.floor(Math.random() * maxRandom);
}

function getComputerChoice() {
  const randomOption = scaledRandomInteger(3);
  switch (randomOption) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      throw RangeError(`Get random value out of range: ${randomOption}`);
  }
}
console.log(getComputerChoice());
