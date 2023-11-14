classe = document.querySelector(".classe")

etudiants = [
    {
        name: "natan",
        avatar:"",
        login:"Natanbinisti",
        githubUrl:"",
    },
    {
        name: "Mey",
        avatar:"",
        login:"MeyDetour",
        githubUrl:"",
    },
    {
        name: "Raphael",
        avatar:"",
        login:"raphaelmoynat",
        githubUrl:"",
    },
    {
        name: "Pierre",
        avatar:"",
        login:"Pierrot69280",
        githubUrl:"",
    },
    {
        name: "Malakaya",
        avatar:"",
        login:"MalakayaLvg",
        githubUrl:"",
    },
]

function studentCard (student){
    let cardTemplate = `
        <img src="${student.avatar}" alt="pp">
        <h4>Prenom: ${student.name}</h4>
        <h4>Login: ${student.login}</h4>
        <h4>Github: ${student.githubUrl}</h4>
        `
    return cardTemplate
}

etudiants.forEach((etudiant)=>{
    donneeDesEtudiants(etudiant).then(etudiant=>{
        console.log(etudiant)
        classe.innerHTML += studentCard(etudiant)
    })
})

async function donneeDesEtudiants (etudiant){
    let url = `https://api.github.com/users/${etudiant.login}`
    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            etudiant.avatar = data.avatar_url
            console.log(data.avatar_url)
            etudiant.githubUrl = data.html_url
            console.log(data.html_url)
            return etudiant


        })
}

console.log(etudiants)