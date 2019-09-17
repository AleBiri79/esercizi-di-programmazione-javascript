/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/

var primaRiga = ' 1';
var secRiga = '';
var terzRiga = '';

for( a = 1; a <= 3; a++){
  secRiga = secRiga + a;
}
for( a = 1; a <= 5; a++){
  terzRiga = terzRiga + a;
}

console.log(' \t\t ' + primaRiga + '\n' + ' \t\t ' + secRiga + '\n' + '\t\t' + terzRiga + '\n' + ' \t\t ' + secRiga + '\n' + ' \t\t ' + primaRiga);
