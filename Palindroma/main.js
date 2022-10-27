//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

let word = prompt('inserisci una parola')

let wordReverse = ''

for (let i = word.length-1; i--){

    wordReverse = wordReverse += word[i]
}