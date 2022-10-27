//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

let word = prompt('inserisci una parola')

let wordReverse = ''

function palindroma(){

for (let i = word.length-1; i >= 0; i--){

    wordReverse = wordReverse += word[i]
    //console.log(word[i])

}
return wordReverse;
}

console.log(`${word} ---> ${palindroma()}`)