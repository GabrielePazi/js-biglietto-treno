let distance = parseInt(prompt("Inserisci numero kilometri: "))
let age = parseInt(prompt("Inserisci la tua età: "))
let price = 0.21 * distance

document.getElementById("ticketPrice").innerHTML = price.toFixed(2) + " €"

let sale = (20 * price) / 100

if (age < 18) {
  document.getElementById("ticketPrice").innerHTML = (price - sale).toFixed(2) + " €"
} else if (age > 65) {
  document.getElementById("ticketPrice").innerHTML = (price - (sale * 2)).toFixed(2) + " €"
}