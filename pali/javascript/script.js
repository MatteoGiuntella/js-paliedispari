// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const parola = prompt('inserisci parola palindroma');
console.log(parola)
// chiedo all'utente di inserire una parola palindroma tramite un prompt e l'assegno alla variabile parola

console.log(wordPalindrome('ciao'));

if(parola == wordPalindrome(parola)){
    alert('bravo hai inserito una parola palindroma')
    console.log('bravo hai inserito una parola palindroma');
  } 
  else {
    alert('mi dispiace la parola inserita non è palindroma')
    console.log('mi dispiace la parola inserita non è palindroma');
  }
//   ho creato una condizione per verificare che la parola inserita dall' utente sia palindroma con alert di verifica per lo stesso

function wordPalindrome (word){

    let breakWord = word.split('');
// creo una variabile e gli assegno il valore della variabile parola che tramite lo split divido in lettere

    breakWord = breakWord.reverse('');
// riassegno il valore della variabile utilizzando il reverse in questo modo la variabile precedente splittata viene capovolta

    let reverseWord = breakWord.join('')
// creo una nuova variabile chiamata reverse world e gli assegno il valore di breakword che tramite joi ho ricompattato

    return reverseWord;
}