//Pour afficher dans la console
console.log("Bonjour le monde");

//Pour declarer une constante
const myConstant = 5;

//Pour declarer une variable
let myVariable = 5;

//(Ancienne notation)
var  myOldVariable = 5;

//Type Nombre
let a = 4.12
let b = 12

//Pour recuperer une valeur d'un utilisaeur
//const input =  parseInt(prompt("Entrez une valeur"))

//Pour confirmer
//const confirm = window.confirm("OK")

//Pour faire une alerte
//alert("Ceci est une alerte")

//type Chaine de caractere
const salameche ="Salameche" + " Pokemon"

//Format
const sacha = `Sacha a capturé un ${salameche}`

console.log (sacha)

//tType booléen
const majeur =  true
const mineur = false

//Pas de valeur
const a1 = undefined
const a2 = null
const a3 = NaN

//Operateur
const x = a + b * 5 // ** = exposant

//Meme operateur qu'en java

//Tableau
const tab = ["Salameche", "Bulbizarre", "Carapuce"]
console.log(tab[0])
tab[2] = "Kaiminus"
console.log(tab.length)
tab.push("Hericendre")
console.log(tab)

//Fonctions des tableaux

tab.pop() //enleve le derniere element

const tabSlice = tab.slice(1, 2)//permet de couper le tableaux. Fut mettre la position de depart et la position avant de terminer

const TabSplice = tab.splice(1, 2, "Vilépierre")// Supprime un certain nobre de valeur à paritir d'un index

const tabConcat = tab.concat(["Ronflex", "Mewtwo"])


console.log(tabConcat)


tabConcat.push(["Ortide", "Mystherbe"]) //ATTENTION ca ajoute le tableau un derniere position (devient multidimensionelle)

tab.reverse() //Reverse un tableau

tab.sort() // Ordonner un tableau (par ordre alphabetique)

const tabNombre = [5, 1, 2, 8, 4]

console.log(tabNombre)
tab.sort(function(a,b) {
    return a - b})

console.log(tabConcat)


