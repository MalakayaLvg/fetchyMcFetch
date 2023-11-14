const maClasse = document.querySelector(".maClasse")


// fetch("https://api.github.com/users/MalakayaLvg/followers")
//     .then(response=>response.json())
//     .then(profilDeMaClasse=>{
//         console.log(profilDeMaClasse)
//         profilDeMaClasse.forEach((profil)=>{
//             maClasse.innerHTML += profil.login
//
//         })
//
//     })

etudiants = [
    {
        name: "natan",
        avatar:"",
        login:"",
        githubUrl:"",
    },
    {
        name: "Mey",
        avatar:"",
        login:"",
        githubUrl:"",
    },
    {
        name: "Raphael",
        avatar:"",
        login:"",
        githubUrl:"",
    },
    {
        name: "Pierre",
        avatar:"",
        login:"",
        githubUrl:"",
    },
    {
        name: "Malakaya",
        avatar:"",
        login:"",
        githubUrl:"",
    },

]

// etudiants.forEach((etudiant)=>{
//     replaceLogin(etudiant)
//     console.log(etudiant)
// })
//
// async function replaceLogin (etudiant){
//     return await fetch("https://api.github.com/users/Pierrot69280")
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data.login)
//         })
// }

array = []
fetch("https://api.github.com/users/MalakayaLvg/followers")
.then(response=> response.json())
.then(data=>{
    data.forEach((eleve)=>{
        array.push(eleve.login)
        console.log(eleve.login)
    })
})

console.log(array)
console.log(array[2])

array.forEach((etd)=>{
    console.log(array[0])
    fetch(`https://api.github.com/users/${etd}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data)
        })
})