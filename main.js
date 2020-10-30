// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt)
 // i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri,
 // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi


// visualizzare 5 numeri casuali
$(document).ready(function() {

    var tempo= 30;
    var numeri = [];
    while(numeri.length < 5) {
        var numero_random = getRandomNumber(1, 100);
        if(!numeri.includes(numero_random)) {
        numeri.push(numero_random);
    }
}
    console.log("numeri da indovinare:")
    console.log (numeri);


// uso la funzione per ottenere 5 numeri random compresi tra 1 e 100
var stringa_random = numeri.join(" - ");

// document.getElementById("demo").innerHTML = stringa_random;
$("#numeriDaIndovinare").text(stringa_random);
console.log(stringa_random);
// bonus
 var orologio = setInterval(function(){
tempo--;

$("#tempoRimanente").text(tempo);
console.log(tempo);


if(tempo <= 0) {
clearInterval(orologio);
    }

}, tempo * 1000);

// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina
setTimeout(function () {
    $('#demo').hide();
    // $("demo").remove();
}, tempo * 1000);

// e l'utente deve inserire (tramite prompt)
// i numeri che ha visto precedentemente, uno alla volta.
setTimeout(function () {

var numeriVisti_utente = [];

for (var i = 0; i < 5 ; i++) {
var numeriVisti = parseInt(prompt("inserisci numero che hai visto precedentemente"));
numeriVisti_utente.push(numeriVisti);
}
console.log("numeriVisti:");
console.log(numeriVisti_utente);

var numeriIndovinati= [];
for (var i = 0; i < numeri.length; i++) {
    var numero_corrente = numeri[i];
    console.log(numero_corrente);
if(numeriVisti_utente.includes(numero_corrente)){
numeriIndovinati.push(numero_corrente);

    }
}
console.log("numeri Indovinati:");
console.log(numeriIndovinati);

$("#demo").text(stringa_random);
var stringaNumeriUtente = numeriVisti_utente.join(" - ");

$("#numeri-indovinati").text(stringaNumeriUtente);
$('#numeri-indovinati').removeClass('hidden');
$('#titolo-numeri-indovinati').removeClass('hidden');


}, 3100);
// numeriVisti.forEach(visti => console.log(visti))
// document.getElementById("visti").innerHTML = numeriVisti;


// Dopo che sono stati inseriti i 5 numeri,
 // il software dice quanti e quali dei numeri da indovinare
 // sono stati individuati.

});
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
