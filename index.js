function submitData(name, email) {
    const UserData = {
      name: name,
      email: email,
    };
    return fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(UserData),
    })
      .then(resp => resp.json())
      .then(data => {
        const id = data.id;
        const p = document.createElement("p");
        p.textContent = `the id : ${id}`;
        document.body.appendChild(p);
      })
      .catch(error => {
        const errorMessage = error.message;
        const p = document.createElement("p");
        p.textContent = `error : ${errorMessage}`;
        document.body.appendChild(p);
      });
  }



















/* // Add your code here
//assign the HTML forms to variables
const dogform = document.getElementById("dogsForm")
const catform = document.getElementById("catsForm")
const userform = document.getElementById("usersForm")
const robotform = document.getElementById("robotsForm")

//assign form values to variables
const dogname = document.getElementById("dogName").value
const catname = document.getElementById("catName").value
const username = document.getElementById("userName").value
const robotname = document.getElementById("robotName").value
const dogbreed = document.getElementById("dogBreed").value
const catbreed = document.getElementById("catBreed").value
const useremail = document.getElementById("userEmail").value
const robottype = document.getElementById("robotType").value

//add event listener when the dog form is submitted
dogform.addEventListener("submit",(e) =>{
    e.preventDefault()
fetch("http://localhost:3000/dogs", {
  method: "POST",
  body: JSON.stringify({
    dogName: dogname,
    dogBreed: dogbreed,
  }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
})
.then(res => (res.json()))
.then(response =>{
    console.log(response)
})
form.reset()
})

//add event listener when the cat form is submitted
catform.addEventListener("submit",(e) =>{
    e.preventDefault()
fetch("http://localhost:3000/cats", {
  method: "POST",
  body: JSON.stringify({
    catName: catname,
    catBreed: catbreed,
  }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
})
.then(res => (res.json()))
.then(response =>{
    console.log(response)
})
form.reset()
})

//add event listener when the robot form is submitted
robotform.addEventListener("submit",(e) =>{
    e.preventDefault()
fetch("http://localhost:3000/robots", {
  method: "POST",
  body: JSON.stringify({
    robotName: robotname,
    robotType: robottype,
  }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
})
.then(res => (res.json()))
.then(response =>{
    console.log(response)
})
form.reset()
})

//add event listener when the user form is submitted
userform.addEventListener("submit",(e) =>{
    e.preventDefault()
fetch("http://localhost:3000/users", {
  method: "POST",
  body: JSON.stringify({
    userName: username,
    userEmail: useremail,
  }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
  
})
.then(res => (res.json()))
.then(response =>{
    console.log(response)
})
form.reset()
}) */