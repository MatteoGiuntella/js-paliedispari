// utente sceglie o pari o dispari
// utente sceglie un numero tra 1 e 5
// genero numero random tra 1 e 5 con una funzione apposita
// sommo i due numeri (quello scelto dall'utente e quello generato random)
//  vince chi ha azzeccato la parità/disparità della somma dei due numeri

let pariDispari = document.getElementById('primascelta').value;
// creo una variabile e gli do come assegnazione il risultato della prima scelta dell'utente tra pari e dispari

let gioca = document.getElementById ('launch');
gioca.addEventListener ('click',function(){
// creo un evento click che scatenerà tutte le istruzioni qui sotto
    let sceltaNumero = parseInt(document.getElementById('numero').value);
    console.log(sceltaNumero, typeof sceltaNumero)

    let generatoreCpu  =  numeroCpu( 1, 5);
    document.getElementById('optioncpu').innerHTML = generatoreCpu;

    let risultato = somma(generatoreCpu, sceltaNumero);
    document.getElementById('risultato').innerHTML = risultato;

    if( ((risultato % 2 == 0) && (pariDispari == 'pari')) || ((risultato % 2 == 1) && (pariDispari == 'dispari')) ){

        console.log('hai vinto')
    }
    else{

        console.log('hai perso')
    }
    
})

function somma (risultatoUtente, risultoCpu){
    return risultatoUtente + risultoCpu;
}
// prima funzione mi serve ad addizzionare il numero inserito dall' utente e quello generato dall funzione creata qui sotto e mi ritorna sotto forma di somma
function numeroCpu (min, max){
    return Math.floor(Math.random() * ( max - min + 1) + min);
}