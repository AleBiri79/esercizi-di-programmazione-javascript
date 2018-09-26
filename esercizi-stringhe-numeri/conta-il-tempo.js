/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var s = 1200;
var o = 300;
var m = 6;
var sec = 5;

var calcOre = Math.ceil(s/o);
var minuti = Math.ceil(calcOre*m);
var secon = Math.round(minuti + sec);


console.log(`Per arrivare a casa mia ci vogliono ${calcOre} ore, ${minuti} minuti e ${secon} secondi.`);
