/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/
var annoNascita = 1979;
var annoAttuale = 2018;
var anni = annoAttuale - annoNascita;
var centoAnni = 100-anni;

console.log(`Quest'anno ho compiuto ${anni} anni, per arrivare a 100 mi mancano ${centoAnni} anni.`);
