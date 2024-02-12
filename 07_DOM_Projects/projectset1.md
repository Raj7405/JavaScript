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


