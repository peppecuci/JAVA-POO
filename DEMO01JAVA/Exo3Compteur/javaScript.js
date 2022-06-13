const inputHTML = document.querySelector("title")
const buttonAddHTML = document.getElementById("buttonAdd")
const buttonRemoveHTML = document.getElementById("buttonRemove") 
const h1HTML = document.querySelector("h1")
let counter = 0

buttonAddHTML.addEventListener("click", () => {
    counter = counter + 1
    h1HTML.innerText = counter
})

buttonRemoveHTML.addEventListener("click", () => {
    counter = counter - 1
    h1HTML.innerText = counter
})

