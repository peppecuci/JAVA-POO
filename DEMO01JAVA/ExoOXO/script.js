const td11HTML = document.getElementById("td11")
const td12HTML = document.getElementById("td12")
const td13HTML = document.getElementById("td13")
const td21HTML = document.getElementById("td21")
const td22HTML = document.getElementById("td22")
const td23HTML = document.getElementById("td23")
const td31HTML = document.getElementById("td31")
const td32HTML = document.getElementById("td32")
const td33HTML = document.getElementById("td33")

let h1HTML = document.getElementById("h1")


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
    if (//righe
        (td11HTML.innerText === td12HTML.innerText && td11HTML.innerText === td13HTML.innerText && td11HTML.innerText !== td13HTML.innerText) ||
        (td21HTML.innerText === td22HTML.innerText && td21HTML.innerText === td23HTML.innerText && td21HTML.innerText !== td13HTML.innerText) ||
        (td31HTML.innerText === td32HTML.innerText && td31HTML.innerText === td33HTML.innerText && td31HTML.innerText !== td13HTML.innerText) ||
        //colonne
        (td11HTML.innerText === td21HTML.innerText && td11HTML.innerText === td31HTML.innerText && td11HTML.innerText !== td13HTML.innerText) ||
        (td12HTML.innerText === td22HTML.innerText && td12HTML.innerText === td32HTML.innerText && td12HTML.innerText !== td13HTML.innerText) ||
        (td13HTML.innerText === td23HTML.innerText && td13HTML.innerText === td33HTML.innerText && td13HTML.innerText !== td13HTML.innerText) ||
        //diagonali dall'alto
        (td11HTML.innerText === td22HTML.innerText && td11HTML.innerText === td33HTML.innerText && td11HTML.innerText !== td13HTML.innerText) ||
        (td33HTML.innerText === td22HTML.innerText && td33HTML.innerText === td31HTML.innerText && td33HTML.innerText !== td13HTML.innerText) ||
        //diagonali dal basso
        (td31HTML.innerText === td22HTML.innerText && td31HTML.innerText === td13HTML.innerText && td31HTML.innerText !== td13HTML.innerText) ||
        (td33HTML.innerText === td22HTML.innerText && td33HTML.innerText === td13HTML.innerText && td33HTML.innerText !== td13HTML.innerText)
    ) {
        console.log("end of the game")
        h1HTML.innerText = "You WON"
        const a = setTimeout(() => {
            h1HTML.innerText = " "
        }, 2000)
        for(i = 0; i < tds.length; i++) {
            tds[i].innerText = " "
        }
    }
}
