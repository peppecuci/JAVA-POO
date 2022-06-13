const tabFruits = ["pomme", "poire", "cerise"]
const tabPrice = [2, 3, 6]
const tabQuantity = [] 
const tabTotalBill = []
let i = 0
let check = true
let bill = 0

for (i = 0; i < tabFruits.length; i++) {
    let quantity = prompt("Combien de " + tabFruits[i] + " souhaitez-vous?")
    tabQuantity[i] = quantity
}

console.log(tabQuantity)

for (i=0; i < tabQuantity.length; i++) {
    tabTotalBill[i] = tabQuantity[i] * tabPrice[i]
}

console.log(tabTotalBill)

for(i = 0; i < tabQuantity[i]; i++) {
    if (tabQuantity[i] === 0) {
    check = false
    }
}

/*if (check === false) {
    console.log()
}*/
    for(i = 0; i < tabTotalBill.length; i++) {
        bill = bill + tabTotalBill[i]
    }

    console.log(bill)

    


/*if (inputPomme > 0 && inputPoire > 0 && inputCerise > 0) {
    ristourne = totalBill * 0.10
    totalBill = totalBill - ristourne
}*/