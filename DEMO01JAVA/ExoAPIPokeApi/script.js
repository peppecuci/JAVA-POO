const URLPokeAPI = "https://pokeapi.co/api/v2/pokemon/__name__"

const input1HTML = document.getElementById("input1")
const input2HTML = document.getElementById("input2")
const button1HTML = document.getElementById("call1")
const button2HTML = document.getElementById("call2")
const h41HTML = document.getElementById("h41")
const h42HTML = document.getElementById("h42")
const img1HTML = document.getElementById("img1")
const img2HTML = document.getElementById("img2")
const imgVsHTML = document.getElementById("idVs")
const h1ReadyHTML = document.getElementById("ready")
const h3HTML = document.getElementById("battle")
let listPokemon = []

button1HTML.addEventListener("click", () => {
    const name1 = input1HTML.value.toLowerCase()
    fetch(URLPokeAPI.replace("__name__", name1))
        .then(response => response.json())
        .then(data => {
            h41HTML.innerText = "You just called " + data.name + "! "
            img1HTML.src = data.sprites.other["official-artwork"].front_default
            listPokemon[0] = data.name
        })
})

button2HTML.addEventListener("click", () => {
    const name2 = input2HTML.value.toLowerCase()
    fetch(URLPokeAPI.replace("__name__", name2))
        .then(response => response.json())
        .then(data => {
            h42HTML.innerText = "You just called " + data.name + "! "
            img2HTML.src = data.sprites.other["official-artwork"].front_default
            let b = setTimeout(() => {
                imgVsHTML.src = "../vsLogo1.jpg"
            }, 1000)

            let a = setTimeout(() => {
                console.log(h1ReadyHTML.innerText = "Get ready for the battle!")
            }, 1500)
            a = setTimeout(() => {
                h1ReadyHTML.innerText = "3"
            }, 3000)
            a = setTimeout(() => {
                h1ReadyHTML.innerText = "2"
            }, 4500)
            a = setTimeout(() => {
                h1ReadyHTML.innerText = "1"
            }, 6000)
            a = setTimeout(() => {
                h1ReadyHTML.innerText = "1"
            }, 7500)
            a = setTimeout(() => {
                h1ReadyHTML.innerText = ""
            }, 8000)

            b = setTimeout(() => {
                imgVsHTML.src = " "
            }, 8000)
        })

    a = setTimeout(() => {
        h1ReadyHTML.innerText = "C'est à " + listPokemon[0] + " d'attaquer"
    }, 10000)
    
})


