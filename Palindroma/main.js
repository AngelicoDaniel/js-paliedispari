//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

let userName = "";
userName = prompt("inserisci una parola");
let reverseWord = reverseFunction(userName);
function reverseFunction(wordToReverse){
    return wordToReverse.split('').reverse().join('');
}
if (userName == reverseWord){
    alert("la parola è palindroma" );
}else{
    alert('la parola non è palindroma')
}