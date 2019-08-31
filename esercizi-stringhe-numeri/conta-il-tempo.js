/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il
  risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var sec = 12560;
var ore = Math.floor (sec/3600);
var min = Math.floor ((sec - (ore*3600))/60);
var secondifinali = sec - 60*min - 3600*ore;

console.log(`${sec} secondi sono formati da ${ore} ore, ${min} minuti e ${secondifinali} secondi`);

//3600 sono i secondi di un'ora
