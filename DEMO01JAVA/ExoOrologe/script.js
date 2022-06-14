
const dateHTML = document.querySelector("h1")
const dateTimeOutHTML = document.querySelector("h2")

//Methode 1
setInterval(() => {
    const d = new Date()
    dateHTML.innerText = d.toLocaleTimeString()
}, 1000)

//Methode 2
function getDate() {
    const d = new Date()
    dateTimeOutHTML.innerText = d.toLocaleTimeString()
    setTimeout(getDate, 1000)
}

getDate()

/*const a = setInterval(() => {
    const d = new Date()
    console.log(d.getSeconds())
}, 1000)

const b = setInterval(() => {
    const d = new Date()
    console.log(d.getMinutes())
}, 60000)

const c = setInterval(() => {
    const d = new Date()
    console.log(d.getHours())
}, 3600000)*/

