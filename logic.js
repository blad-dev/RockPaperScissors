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

function getHumanChoice() {
  const legalInput = [];
  legalInput['rock'] = true;
  legalInput['paper'] = true;
  legalInput['scissors'] = true;
  const getInput = () => prompt('Enter your move, please (rock, paper, scissors)');
  const getInputAfterInvalid = () =>
    prompt('Your move is illegal, please, enter a legal move (rock, paper, scissors)');
  let input = getInput();
  while (!legalInput[input]) {
    input = getInputAfterInvalid();
  }
  return input;
}

function onlyWithFirstLetterCapitalized(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function isATie(firstChoice, secondChoice){
  return firstChoice === secondChoice;
}
function didFirstWin(firstChoice, secondChoice) {
  if (isATie(firstChoice, secondChoice)) return false;

  return (
    (firstChoice === 'rock' && secondChoice === 'scissors') ||
    (firstChoice === 'paper' && secondChoice === 'rock') ||
    (firstChoice === 'scissors' && secondChoice === 'paper')
  );
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const outputHumanChoice = onlyWithFirstLetterCapitalized(humanChoice);
  const outputComputerChoice = onlyWithFirstLetterCapitalized(computerChoice);

  if (isATie(humanChoice, computerChoice)) {
    console.log(`A tie, ${outputHumanChoice} is equal to the ${outputComputerChoice}`);
  } else if (didFirstWin(humanChoice, computerChoice)) {
    console.log(`You win! ${outputHumanChoice} beats ${outputComputerChoice}!`);
    ++humanScore;
  } else if (didFirstWin(computerChoice, humanChoice)) {
    console.log(`You lose! ${outputComputerChoice} beats ${outputHumanChoice}!`);
    ++computerScore;
  }
}

playRound(getHumanChoice(), getComputerChoice());
