let requesturl = "";

const btn = document.getElementById("btn");
let input = document.getElementById("link");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  requesturl = String(input.value);
  callApi(requesturl);

  //test
  console.log(typeof requesturl);
});

function callApi(Url_link) {
  console.log(Url_link);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", Url_link);
  xhr.onload = function () {
    const data = JSON.parse(this.responseText);
    //call from here to make card
    addImage(data.avatar_url);
    addName(data.name)
    addBio(data.bio)
    addFollowers(data.followers)

    //test
    console.log(data);
  };
  xhr.send();
}

function addImage(profile_img) {
  const image = document.getElementById("img");
  const img = document.createElement("img");
  img.src = `${profile_img}`;
  image.appendChild(img);

  //test
//   console.log(typeof profile_img);
//   console.log(img);
}

function addName(profile_name){
    const name  = document.getElementById("name");
    const h3 = document.createElement('h3');
    h3.id = 'profile_Name'
    h3.innerHTML = `${profile_name}`
    name.appendChild(h3)
}

function addBio(profile_bio){
    const bio = document.getElementById('bio');
    const p = document.createElement('p');
    p.id = 'profile_Bio'
    p.innerHTML = `${profile_bio}`
    bio.appendChild(p)
}

function addFollowers(profile_follower){
    const followers = document.getElementById('followers');
    const h4 = document.createElement('h4');
    h4.id = 'profile_Follower'
    h4.innerHTML = `${profile_follower}`
    followers.appendChild(h4)
}
