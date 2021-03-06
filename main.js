// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt)
 // i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri,
 // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi


// uso la funzione per ottenere 5 numeri random compresi tra 1 e 100
$(document).ready(function() {

    var tempo = 30;


    var numeri = [];
    while(numeri.length < 5) {
        // genero un numero casuale
        var numero = getRndInteger(1, 100);
        // verifico se il numero è già stato inserito nell'array
        if(!numeri.includes(numero)) {
            numeri.push(numero);
        }
    }
    console.log('Numeri da indovinare:');
    console.log(numeri);

    // unisco tutti gli elementi in un array e inserisco in pagina i numeri estrapolati
    var stringa_numeri = numeri.join(' - ');

    $('#numeriDaindovinare').text(stringa_numeri);

    // imposto il contdown di 30 sec
    var orologio = setInterval(function() {

        tempo--;

        // stampo in pagina il tempo che rimane
        $('#tempoRimanente').text(tempo);

        // quando arrivo a 0 si interrompe
        if(tempo <= 0) {

            clearInterval(orologio);
        }
    }, 1000);
    // ogni secondo si ripete

    // faccio partire un timer di 30 secondi
    setTimeout(function() {
        // nascondo i numeri dalla pagina

        $('#numeriDaindovinare').empty();

    }, tempo * 1000); // 30000 ms


    setTimeout(function() {

        // chiedo all'utente i 5 numeri
        var numeri_utente = [];
        for (var i = 0; i < 5; i++) {
            var numero_utente = parseInt(prompt('Inserisci un numero di quelli che ti ricordi'));
            numeri_utente.push(numero_utente);
        }
        console.log("numeri inseriti dall'utente:");
        console.log(numeri_utente);

        // verifico quanti numeri ha indovinato l'utente
        var numeri_indovinati = [];
        // scorro l'array dei numeri da indovinare
        for (var i = 0; i < numeri.length; i++) {
            var numero_corrente = numeri[i];
            // verifico un elemento alla volta, se è presente tra le scelte dell'utente
            if(numeri_utente.includes(numero_corrente)) {
                // se l'utente ha inserito il numero in questione, lo salvo
                numeri_indovinati.push(numero_corrente);
            }
            // altrimenti, l'utente non l'ha indovinato, procedo con il successivo
        }
        console.log('numeri indovinati:');
        console.log(numeri_indovinati);

        // inserisco in pagina i numeri dell'utente
        $('#numeri-random').text(stringa_numeri);


        // unisco tutti gli elementi dell'array in una stringa
        var stringa_numeri_utente = numeri_utente.join(' - ');

        $('#numeriVistiUtente').text(stringa_numeri_utente);
        $('#numeriVistiUtente').removeClass('hidden');
        $('#titoloNumeriVistiUtente').removeClass('hidden');

        // stampo in pagina i numeri indovinati
        // unisco tutti gli elementi dell'array in una stringa
        var stringa_numeri_indovinati = numeri_indovinati.join(' - ');

        $('#numeri-indovinati').text(stringa_numeri_indovinati);
        $('#numeri-indovinati').removeClass('hidden');
        $('#titolo-numeri-indovinati').removeClass('hidden');


        $('.wrapper').append('<h1>Hai indovinato ' + numeri_indovinati.length + ' numeri!</h1>');

    }, tempo * 1100); // 30300 ms

});


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
