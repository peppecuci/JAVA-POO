//Structure conditionnelle

const age = 18
if (age >= 18){
    console.log("Bonjour")
}

// === plutot que ==
/*if (1 === "1") {
    console.log("Bonjour")
}*/

//Type of: idem aue instance of (retourne le type)
else if (typeof(age) === "number") {
    console.log("Vous n'etes pas assez agé")
}

else  {
    console.log("Erreur")
}

//Switch. On peut aussi utiliser Switch(true) et la condition au dans le case ex: a < 42
const a = 42
switch(a) {
    case 42:
        console.log("la variable vaut 42")
        break
    case 43:
            console.log("La variable vaut 43")
        break
    default:
        console.log("Default")
    break
}

//"Faux" booléen

const b = 0
const c = ""
if (b) {
    console.log("Je passe dans le if")
} 

if (c) {
    console.log("je passe dans le if")
}

//Structure iterative
let i = 0
while (i<10) {
    console.log(i)
    i++
}

//For i
for (let j = 0; j < 10; j++) {
    console.log(j)
}

//Renvoi le tableau en entier, equivalent de foreach
const tab = ["Salameche", "Bulbizarre", "Carapuce"]
for (const pokemon of tab) {
    console.log(pokemon)
}

//Renvoi l'index
for(const indice in tab) {
    console.log(indice)
}

const salameche = {
    name: "Salameche",
    type: "Feu",
    level: 12
}

console.log(salameche["type"])
salameche.type = "Eau";
console.log(salameche.type)

for (const at in salameche) {
    console.log(at)
}