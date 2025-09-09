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
  const getInput = () => prompt('Enter your move, please (rock, paper, scissors)').toLowerCase();
  const getInputAfterInvalid = () =>
    prompt(
      'Your move is illegal, please, enter a legal move (rock, paper, scissors)'
    ).toLowerCase();
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

function correctBeatOrBeats(choice) {
  switch (choice) {
    case 'rock':
    case 'paper':
      return 'beats';
    case 'scissors':
      return 'beat';
    default:
      throw Error(`Provided choice is invalid: ${choice}`);
  }
}

function playRound(humanChoice, computerChoice) {
  const outputHumanChoice = onlyWithFirstLetterCapitalized(humanChoice);
  const outputComputerChoice = onlyWithFirstLetterCapitalized(computerChoice);

  if (isATie(humanChoice, computerChoice)) {
    console.log(`A tie, ${outputHumanChoice} is equal to the ${outputComputerChoice}`);
  } else if (didFirstWin(humanChoice, computerChoice)) {
    const beatBeats = correctBeatOrBeats(humanChoice);
    console.log(`You win! ${outputHumanChoice} ${beatBeats} ${outputComputerChoice}!`);
    ++humanScore;
  } else if (didFirstWin(computerChoice, humanChoice)) {
    const beatBeats = correctBeatOrBeats(computerChoice);
    console.log(`You lose! ${outputComputerChoice} ${beatBeats} ${outputHumanChoice}!`);
    ++computerScore;
  }
}

function playGame(){
  for(let i = 0; i < 5; ++i){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  if(humanScore === computerScore){
    console.log(`The game ended in a tie.`);
    console.log(`Score: ${humanScore}:${computerScore}`);  
  }
  else if(humanScore > computerScore){
    console.log(`You won, congratulations!`);
    console.log(`Score: ${humanScore}:${computerScore}`);  
  }
  else{
    console.log(`You lost, try another time.`);
    console.log(`Score: ${humanScore}:${computerScore}`);  
  }
}

playGame();