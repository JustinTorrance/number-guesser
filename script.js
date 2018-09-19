var inputGuess = document.querySelector('.input-guess');
var guessButton = document.querySelector('.guess-btn');
var clearButton = document.querySelector('.clear-btn');
var resetButton = document.querySelector('.reset-btn');
var response = document.querySelector('.response'); 
var max = 100;
var min = 1;
var randomNumber = generateRndNum(min, max);
console.log(randomNumber);

inputGuess.addEventListener('keyup', enableButtons);
guessButton.addEventListener('click', submitGuess);
clearButton.addEventListener('click', clearInputs);
resetButton.addEventListener('click', resetGame);

function generateRndNum(min, max) {
  return Math.ceil(Math.random() * max - min) + min;
};

function enableButtons() {
  if (inputGuess.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
  }
};

function submitGuess(event) {
  event.preventDefault();
  document.querySelector('.your-last').innerText = `Your last guess was`
  document.querySelector('.guessed-number').innerText = inputGuess.value;
  showFeedback();
  inputGuess.value = '';
  enableButtons();
  resetButton.disabled = false;
  console.log('max:', max);
  console.log('min:', min);
};

function showFeedback() {
  var parsedNumber = parseInt(inputGuess.value);
  if (parsedNumber > randomNumber && parsedNumber <= max) {
    response.innerHTML = `That's too high!`;
  } else if (parsedNumber < randomNumber && parsedNumber >= min) {
    response.innerText = `That's too low!`;
  } else if (parsedNumber === randomNumber) {
    min = min - 10;
    max += 10;
    randomNumber = generateRndNum(min, max);
    response.innerText = `That's correct! Now guess a number between ${min} and ${max}`;
    console.log('random number:', randomNumber);
  } else {
    response.innerText = `Whoops! Please enter a number between ${min} and ${max}`;
  };
};

function resetGame(e) {
  e.preventDefault();
  max = 100;
  min = 1;
  randomNumber = generateRndNum(1, 100);
  console.log(randomNumber);
  inputGuess.value = '';
  enableButtons();
  resetButton.disabled = true;
  document.querySelector('.your-last').innerText = 'Guess a number between 1 and 100!';
  document.querySelector('.guessed-number').innerText = '';
  response.innerHTML = '';
};

function clearInputs(e) {
  e.preventDefault();
  inputGuess.value = ('');
};
