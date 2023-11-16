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
        avatar.src = monProfil.avatar_url
        myCompany.innerHTML = `Company: ${monProfil.company}`
        myFollowers.innerHTML = `Followers: ${monProfil.followers}`
        myFollowing.innerHTML = `Following: ${monProfil.following}`
        myLocation.innerHTML = `Location: ${monProfil.location}`
        myName.innerHTML = `Name: ${monProfil.name}`
    })

const repositoryList = document.querySelector(".repositoryList")
const buttonAddRep = document.querySelector(".buttonAddRep")

// fetch("https://api.github.com/users/MalakayaLvg/repos")
//     .then(response => response.json())
//     .then(repositories=>{
//             console.log(repositories[1])
//             // repositories.forEach((repository)=>{
//             //         buttonAddRep.addEventListener('click',()=>{
//             //                 console.log("click")
//             //         })
//                     // repositoryList.innerHTML += `<a href="${repository.html_url}">${repository.name}</a>`
//             })


let repositoryCounter = 0
buttonAddRep.addEventListener("click",()=>{
        console.log("click")
        findRepository(repositoryCounter)
        repositoryCounter ++
        console.log(repositoryCounter)

})
//
async function findRepository(repositoryNum){
        await fetch("https://api.github.com/users/MalakayaLvg/repos")
            .then(response => response.json())
            .then(repositories=>{
                    actualRepository = repositories[repositoryNum]
                    repositoryList.innerHTML += `<a href="${actualRepository.html_url}">${actualRepository.name}</a>`
            })
}

