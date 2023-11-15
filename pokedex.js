// fetch("https://pokeapi.co/api/v2/pokemon/1/")
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data.sprites.front_default)
//     })

const inputPokemon = document.querySelector("#inputPokemonName")
const buttonSearch = document.querySelector(".buttonSearch")
const pokemonImage = document.querySelector(".pokemonImage")
const pokemonTypes = document.querySelector(".pokemonTypes")
const pokemonInfos = document.querySelector(".pokemonInfos")

buttonSearch.addEventListener("click",()=>{
    // console.log(inputPokemon.value)
    getPokemonObject(inputPokemon.value).then(data=>{
        console.log(data)
        getPokemonInfos(data)
        getPokemonEvolution(data)
    })
    // getPokemonEvolution(inputPokemon.value).then(data=>{
    //     // console.log(data)
    // })
})

async function getPokemonObject (pokemonName){
    return await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${pokemonName}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            return data
        })
}

// async function getPokemonEvolution (pokemonName){
//     await fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonName}/`)
//         .then(response => response.json())
//         .then(data=>{
//             console.log(data)
//             let evolution = data.chain.evolves_to
//             let evolutionName = evolution[0].species.name
//             console.log("evolution")
//             console.log(evolutionName)
//         })
// }

 function getPokemonInfos (pokemonObject){
    pokemonInfos.innerHTML = `
    <h5>Nom: ${pokemonObject.name.fr}</h5>
    <h5>id: ${pokemonObject.pokedexId}</h5>
    <h5>Atk: ${pokemonObject.stats.atk}</h5>
    <h5>Def: ${pokemonObject.stats.def}</h5>
    <h5>Hp: ${pokemonObject.stats.hp}</h5>
    <h5>Vit: ${pokemonObject.stats.vit}</h5>
    `
     pokemonImage.src = pokemonObject.sprites.regular
 }

 const preEvolution = document.querySelector(".preEvolution")
 const nextEvolution = document.querySelector(".nextEvolution")
 const megaEvolution = document.querySelector(".megaEvolution")

 function getPokemonEvolution (pokemonObject){
    let IsTherePreEvolution = pokemonObject.evolution.pre
    let IsThereNextEvolution = pokemonObject.evolution.next
    let IsThereMegaEvolution = pokemonObject.evolution.mega
     if (IsTherePreEvolution != null){
        preEvolution.innerHTML = `Precedent Evolution : ${IsTherePreEvolution[0].name}`
     }
     if (IsThereNextEvolution != null){
         nextEvolution.innerHTML = `Evolution Suivante : ${IsThereNextEvolution[0].name}`
     }
     if (IsThereMegaEvolution != null){
         megaEvolution.innerHTML = `Mega Evolution : ${IsThereMegaEvolution[0].orbe}`
     }

 }
