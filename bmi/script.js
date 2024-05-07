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
    Message.style.display = "block"
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