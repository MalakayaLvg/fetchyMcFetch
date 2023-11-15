const buttonRandomJoke = document.querySelector(".buttonRandomJokes")
const textRandomJoke = document.querySelector(".textRandomJoke")

// async function getRandomJoke (){
//     let randomJoke = ""
//     return await fetch("https://api.chucknorris.io/jokes/random")
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data.value)
//             randomJoke = data.value
//             return randomJoke
//         })
// }
//
// buttonRandomJoke.addEventListener("click",()=>{
//     console.log("click")
//     getRandomJoke().then(data =>{
//         textRandomJoke.innerHTML += `<h4>${data}</h4>`
//         })
//     })
const buttonsCategory = document.querySelector(".buttonsCategories")

fetch("https://api.chucknorris.io/jokes/categories")
    .then(response=>response.json())
    .then(data=>{
        data.forEach((category)=>{
            buttonsCategory.innerHTML += `<button class="${category}">${category}</button>`
        })
    })




async function getCategoryJoke (cat){
    return await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data.value)
        })
}