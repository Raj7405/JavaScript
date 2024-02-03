newDiv.className = "Second"
    
//child div
const subDiv = document.createElement('div')
subDiv.className = "heading2"


const subDiv2 = document.createElement('div')
subDiv2.className = "Edu_list"

// document.querySelector('.heading2').appendChild(document.createTextNode('Education'))

newDiv.appendChild(subDiv)
newDiv.appendChild(subDiv2)


const newHeading = document.createElement('h2')
newHeading.className = "head2"
newHeading.appendChild(document.createTextNode("Education"))



document.body.appendChild(newDiv) 