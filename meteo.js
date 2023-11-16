

const apiKey = "8fef465b720b02aacc2e63b0c8a76238"
let city = ""

const textTemp = document.querySelector(".temp")
const textTempMini = document.querySelector(".temp-mini")
const textTempMaxi = document.querySelector(".temp-maxi")
const textCity = document.querySelector(".ville")
const iconWeather = document.querySelector(".iconWeather")
const weatherDescription = document.querySelector(".weatherDescription")
const inputChangeCity = document.querySelector(".inputChangeCity")
const buttonChangeCity = document.querySelector(".buttonChangeCity")


async function getWeather(userCity){
    city = userCity
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            textCity.innerHTML = city
            textTemp.innerHTML = `${data.main.temp}°C`
            textTempMini.innerHTML = `Min: ${data.main.temp_min}°C`
            textTempMaxi.innerHTML = `Max: ${data.main.temp_max}°C`
            let weather = data.weather
            weatherDescription.innerHTML = weather[0].description
            iconWeather.src = `https://openweathermap.org/img/wn/${weather[0].icon}.png`
        })
}

getWeather("Lyon")

buttonChangeCity.addEventListener('click', ()=>{
    getWeather(inputChangeCity.value)
})