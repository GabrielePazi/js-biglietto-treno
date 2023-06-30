let distance = parseInt(prompt("Inserisci numero kilometri: "))
let age = parseInt(prompt("Inserisci la tua età: "))

let price = 0.21 * distance

let sale = (20 * price) / 100

document.getElementById("età").innerHTML = age + " anni"
document.getElementById("distanza").innerHTML = distance + " Km"
document.getElementById("prezzo").innerHTML = price.toFixed(2) + " €"

if (age < 18) {
  document.getElementById("ticketPrice").innerHTML = (price - sale).toFixed(2) + " €"
  document.getElementById("sconto").innerHTML = "- " + sale.toFixed(2) + " €"
} else if (age > 65) {
  document.getElementById("ticketPrice").innerHTML = (price - (sale * 2)).toFixed(2) + " €"
  document.getElementById("sconto").innerHTML = "- " + (sale * 2).toFixed(2) + " €"

} else {
  document.getElementById("ticketPrice").innerHTML = price.toFixed(2) + " €"
  document.getElementById("sconto").innerHTML = "-0.00 €"
}