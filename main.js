// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt)
 // i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri,
 // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi


// visualizare 5 numeri casuali


// funzione che genera N numeri random, dove N è espresso nel parametro "quantita"
// riceve in input la quantità di numeri da generare e il limite inferiore e il limite superiore
// restituisce un array con gli N numeri random generati
function getRandomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return number;
}

// funzione che genera N numeri random, dove N è espresso nel parametro "quantita"
// riceve in input la quantità di numeri da generare e il limite inferiore e il limite superiore
// restituisce un array con gli N numeri random generati
function getRandomNumbers(quantita, min, max) {
    var numeri = [];
    for (var i = 0; i < quantita; i++) {
        var numero_random = getRandomNumber(min, max);
        numeri.push(numero_random);
    }
    return numeri;
}

// invoco la funzione per ottenere 100 numeri random compresi tra 1 e 1000
var numeri_random = getRandomNumbers(5, 1, 100);
console.log(numeri_random);
