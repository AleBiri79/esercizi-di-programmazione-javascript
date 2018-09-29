/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/
 var anno = 1979;
var annoAttuale = 2018;
var centoAnni = 61;

var totaleAnni = Math.ceil(annoAttuale - anno);
var cento = Math.ceil(totaleAnni + centoAnni);

console.log(`Quest'anno ho compiuto ${totaleAnni} anni, per arrivare a ${cento} anni mi mancano ${centoAnni} anni.`);