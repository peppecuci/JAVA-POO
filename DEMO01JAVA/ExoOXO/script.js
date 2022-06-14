const td11HTML = document.getElementById("td11")
const td12HTML = document.getElementById("td12")
const td13HTML = document.getElementById("td13")
const td21HTML = document.getElementById("td21")
const td22HTML = document.getElementById("td22")
const td23HTML = document.getElementById("td23")
const td31HTML = document.getElementById("td31")
const td32HTML = document.getElementById("td32")
const td33HTML = document.getElementById("td33")

const tds = document.querySelectorAll("td")
let i = 0
let tour = "X"

for (const td of tds) {
    td.addEventListener("click", () => {
        console.log(td.id)
        td.innerText = tour
        if (tour === "X") {
            tour = "O"
        }
        else {
            tour = "X"
        }
        winner(td)
    }) 
}

function winner (td) {
    if (td11HTML.innerText === td12HTML.innerText && td11HTML.innerText === td13HTML.innerText) {
        console.log("end of the game")
    }
}
