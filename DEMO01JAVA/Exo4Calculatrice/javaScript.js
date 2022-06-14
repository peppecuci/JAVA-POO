const firstValueHTML = document.getElementById("firstValue")
const secondValueHTML = document.getElementById("secondValue")
const selectHTML = document.querySelector("select")
const buttonHTML = document.getElementById("result")
const inputHTML = document.getElementById("resultat")
let result = 0
let valueNbr1 = 0
let valueNbr2 = 0

firstValueHTML.addEventListener("input", () => {
    const value1 = parseInt(firstValueHTML.value)
    if (value1 !== NaN) {
        valueNbr1 = value1
    }
})

secondValueHTML.addEventListener("input", () => {
    const value2 = parseInt(secondValueHTML.value)
    if (value2 !== NaN) {
        valueNbr2 = value2
    }
})

buttonHTML.addEventListener("click", () => {
    console.log(valueNbr1)
    switch (selectHTML.value) {
        case "plus": 
            result = valueNbr1 + valueNbr2
            break
        case "less": 
            result = valueNbr1 - valueNbr2
            break
        case "multiplicate": 
            result = valueNbr1 * valueNbr2
            break
        case "divide": 
            result = valueNbr1 / valueNbr2
            break
    }
    console.log(result)
    inputHTML.value = result
})