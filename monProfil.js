const avatar = document.querySelector(".avatar")
const myLogin = document.querySelector(".login")
const myCompany = document.querySelector(".company")
const myFollowers = document.querySelector(".followers")
const myFollowing = document.querySelector(".following")
const myLocation = document.querySelector(".location")
const myName = document.querySelector(".name")

fetch("https://api.github.com/users/malakayalvg")
    .then(response => response.json())
    .then(monProfil=>{
        console.log(monProfil)
        myLogin.innerHTML = `Login: ${monProfil.login}`
        avatar.innerHTML = `<img src="${monProfil.avatar_url}" alt="avatar" style="width: 80vw">`
        myCompany.innerHTML = `Company: ${monProfil.company}`
        myFollowers.innerHTML = `Followers: ${monProfil.followers}`
        myFollowing.innerHTML = `Following: ${monProfil.following}`
        myLocation.innerHTML = `Location: ${monProfil.location}`
        myName.innerHTML = `Name: ${monProfil.name}`
    })



 