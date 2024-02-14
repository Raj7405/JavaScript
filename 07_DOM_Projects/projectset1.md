# Projects Related to DOMs
## Project Links

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution Code
## Project 1 - color changer/swicter
### 1) Main Approch

```javascript

const Buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

Buttons.forEach(function(button){
  button.addEventListener('click', function(event){
    // console.log(event)
    // console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id
    } 
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id
    }
  })
})

```
### 2) My Approch
 ```javascript
 
const Button = document.querySelectorAll('.button')

Button[0].addEventListener('click',function(){
  document.body.style.backgroundColor = "grey"
})
Button[1].addEventListener('click',function(){
  document.body.style.backgroundColor = "white"
})
Button[2].addEventListener('click',function(){
  document.body.style.backgroundColor = "blue"
})
Button[3].addEventListener('click',function(){
  document.body.style.backgroundColor = "yellow"
})
 
 ```
## Project 2 - BMI Calculator

```javascript
const form =  document.querySelector("form")

form.addEventListener('submit', function(event){
  event.preventDefault()
  const height = parseInt(document.getElementById('height').value)
  const weight = parseInt(document.getElementById('weight').value)
  const Result = document.getElementById('results')
  const Message =  document.getElementById('message')
  if(height <= 0 || height === '' || isNaN(height) ){
    Result.innerHTML = "Please enter valid heigth"
  } 
  else if(weight <= 0 || weight === '' || isNaN(weight)){
    Result.innerHTML = "Please enter valid weight"
  }
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    Result.innerHTML = `<span>${bmi}</span>`
    if(bmi<18.6){
      Message.innerHTML = '<h3><b>You are under weigth!! need to gain some weigth soilder</b></h3>'
    } 
    else if(18.6 <= bmi && bmi <= 24.9){
      Message.innerHTML = '<h3><b>You are in normal conditon soilder,do regular exercise on regular basis</b></h3>'
    }
    else if(bmi > 24.9){
      Message.innerHTML = '<h3><b>You are over weigth bud!! be motivated start exercise</b></h3>'
    }

  }   
})
```

## Project 3 - Digital Clock
```javascript
const clock = document.querySelector('#clock')
// const clock = document.getElementById('clock')
const localDate = document.getElementById('date')

setInterval(function (){
 let time =  new Date()
 clock.innerHTML = time.toLocaleTimeString()
 localDate.innerHTML = time.toLocaleDateString()
},1000)
```
## Project 4 - Guess The Number Game
```javascript
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

```