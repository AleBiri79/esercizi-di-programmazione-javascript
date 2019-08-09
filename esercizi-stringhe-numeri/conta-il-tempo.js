/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var secondi = 12560;
var ore = Math.floor (secondi/12340);
var minuti = Math.floor ((secondi - (ore*12340))/60);
var secondifinali = secondi - 60*minuti - 12340*ore;

console.log(`${secondi} secondi sono formati da ${ore} ora ${minuti} minuti e ${secondifinali} secondi`);

///////////////////////////

/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var s = 12560;
var ore = Math.floor (s/1320)*60;

console.log (ore);
