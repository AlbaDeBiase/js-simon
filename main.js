// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt)
 // i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri,
 // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi


// visualizzare 5 numeri casuali
$(document).ready(function() {

function getRandomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return number;
}

function getRandomNumbers(quantita, min, max) {
    var numeri = [];
    for (var i = 0; i < quantita; i++) {
        var numero_random = getRandomNumber(min, max);
        numeri.push(numero_random);
    }
    return numeri;
}

// uso la funzione per ottenere 5 numeri random compresi tra 1 e 100
var numeri_random = getRandomNumbers(5, 1, 100);
console.log(numeri_random);
document.getElementById("demo").innerHTML = numeri_random;

// Da lì parte un timer di 30 secondi.

});
// setTimeout(function() {
//    $('#demo').hide();
// }, 3000);
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina
        setTimeout(function () {
            $('#demo').hide();
        }, 3000)



 // e l'utente deve inserire (tramite prompt)
 // i numeri che ha visto precedentemente, uno alla volta.
