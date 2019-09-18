/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N),
  dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/

var white = 0;
var black = 0;
var n = 3;

for (i = 0; i <= n; i++){
  white = Math.floor(Math.random() * (6) ) +1;//+1 sotto il 10
   white += n;
  black = Math.floor(Math.random() * (6) ) +1;
   black += n;

if (white < black){
   n = 'il vincitore è Black';
}
 if (white > black){
   n = 'il vincitore è White';
 }
   if (white === black){
n = 'pareggio';
 }



}

console.log(n, white, black);
