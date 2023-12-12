// utente sceglie o pari o dispari
// utente sceglie un numero tra 1 e 5
// genero numero random tra 1 e 5 con una funzione apposita
// sommo i due numeri (quello scelto dall'utente e quello generato random)
//  vince chi ha azzeccato la parità/disparità della somma dei due numeri

let pariDispari = document.getElementById('primascelta').value;

let gioca = document.getElementById ('launch');
gioca.addEventListener ('click',function(){

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

function numeroCpu (min, max){
    return Math.floor(Math.random() * ( max - min + 1) + min);
}