const inputHTML = document.querySelector("#text")
const buttonAddHTML = document.getElementById("buttonAdd")
const buttonRemoveHTML = document.getElementById("buttonRemove") 
const h1HTML = document.querySelector("h1")
let counter = 0
let incrementation = 1


buttonAddHTML.addEventListener("click", () => {
    counter = counter + incrementation
    h1HTML.innerText = counter
})

buttonRemoveHTML.addEventListener("click", () => {
    counter = counter - incrementation
    h1HTML.innerText = counter
})

inputHTML.addEventListener("input", () => {
    const incr = parseInt(inputHTML.value)
    if (incr) {
        incrementation = incr
    }
})



