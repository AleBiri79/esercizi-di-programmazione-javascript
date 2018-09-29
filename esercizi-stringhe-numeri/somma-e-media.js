/*
  Somma e media
  Scrivi un programma che prenda in input 5 numeri a tua scelta e restituisca in output la somma e la media.
  http://www.imparareaprogrammare.it
*/


var a = 7;
var b = 5;
var c = 8;
var d = 6;
var e = 9;


var sommaVoti = Math.round (a + b + c + d + e);
var mediaVoti = Math.round (sommaVoti/5);

console.log(`La somma dei voti delle cinque materie e di ${sommaVoti}, la mia media e del ${mediaVoti}`);