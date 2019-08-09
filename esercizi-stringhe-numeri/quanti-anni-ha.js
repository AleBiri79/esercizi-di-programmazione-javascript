/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/
//il simbolo ${} che aggiunge la variabile all'interno della stringa*
var annoNascita = 1979;
var annoAttuale = 2019;
var calcoloEta = annoAttuale - annoNascita;
var cento = 100 - calcoloEta;

console.log(`Ale ha ${calcoloEta} anni e per arrivare a 100 le mancaco ${cento} anni.`);
