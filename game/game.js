let randomNumber =parseInt(Math.random()*100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = [];  //make change in future
let numGuess = 0;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess); //testing
    validateGuess(guess);   
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number");
  } else if(guess < 1){
    alert("Please enter a number greater than 1");
  } else if(guess > 100){
    alert("please enter a number less than 100")
  } else{
    prevGuess.push(guess);
    if(numGuess >= 9){
      cleanUpGuessSlot(guess);
      displayMessage(`Game Over, Random number is ${randomNumber}`);
      endGame();
    } else{
      cleanUpGuessSlot(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage("You guessed it right");
    endGame();
  } else if(guess < randomNumber){
    displayMessage("Number is too low")
  } else if(guess > randomNumber){
    displayMessage("Number is too high")
  } 
  
}

function cleanUpGuessSlot(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
  
}
function newGame(){
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 0;;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true; 
  })
}
