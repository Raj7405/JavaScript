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
