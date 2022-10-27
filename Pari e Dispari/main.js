// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let evenOrOdd = prompt('pari o dispari?')
console.log(evenOrOdd)
let number =  parseInt(prompt('inserisci un numero da 1 a 5'))
console.log(number)

function randomNumber(){
    let randomNumber = Math.round(Math.random() * 4) + 1;
    return randomNumber;
}
console.log(randomNumber())