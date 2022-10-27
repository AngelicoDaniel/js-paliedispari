// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let evenOrOdd = prompt('pari o dispari?').toLowerCase
console.log(evenOrOdd)

let userNumber =  parseInt(prompt('inserisci un numero tra 1 a 5'))
    console.log(userNumber)

function randomNumber(){
    let randomNumber = Math.round(Math.random() * 4) + 1;
    return randomNumber;
}
console.log(randomNumber())

function game(){

    if (userNumber <= 5 && userNumber > 0 ){
        result = userNumber + randomNumber()
        return result
    } else {
        alert('inserisci un numero tra 1 e 5')
    }
} 

console.log(game())

if (evenOrOdd == 'pari') {

    if (game() % 2 == 0) {
        alert('hai vinto')
    } else {
        alert('hai perso')
    }

} else {

    if (game() % 2 != 0) {
        alert('hai vinto')
    } else {
        alert('hai perso')
    }
}