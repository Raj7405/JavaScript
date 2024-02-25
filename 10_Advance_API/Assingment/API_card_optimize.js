let requesturl = "";

const btn = document.getElementById("btn");
let input = document.getElementById("link");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  requesturl = String(input.value);
  callApi(requesturl);
});

function callApi(Url_link) {
    input.value = '';
  console.log(Url_link);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", Url_link);
  xhr.onload = function () {
    const data = JSON.parse(this.responseText);
   
    addData(data)
  };
  xhr.send();
}

function addData(userData){
    const card = document.getElementById('card-div')
    // card.classList.add('card')

    const div = document.createElement('div')
    div.classList.add('card')
    card.appendChild(div)
    
    const img = document.createElement("img");
    img.src = userData.avatar_url;
    img.classList.add('profile-img'); // Add a class to the img element for styling purposes
    div.appendChild(img);
    
    const h3 = document.createElement('h3');
    h3.id = 'profile_Name'
    h3.innerHTML = `${userData.name}`
    div.appendChild(h3)
  
    const bio = document.createElement('p');
    bio.id = 'profile_Bio'
    bio.innerHTML = `<b>Bio: </b>${userData.bio}`
    div.appendChild(bio)

    const followers = document.createElement('p');
    followers.id = 'profile_Follower'
    followers.innerHTML = `<b>Followers:</b> ${userData.followers}`
    div.appendChild(followers)

}

