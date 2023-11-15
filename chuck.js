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
            buttonsCategory.innerHTML += `<button class="buttonCatJoke" id="${category}">${category}</button>`

            let buttonsCatJokes = document.querySelectorAll(".buttonCatJoke")
            buttonsCatJokes.forEach((button=>{
                button.addEventListener("click",()=>{
                    console.log(button.id)
                    getCategoryJoke(button.id)
                })
            }))
        })
    })



async function getCategoryJoke (cat){
    return await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data.value)
            textRandomJoke.innerHTML += `<h4>${data.value}</h4>`
        })
}

