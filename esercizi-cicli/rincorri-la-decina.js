/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/

var num = ' ';
    for (var i = 1; i < 101; i++) {
num += i + ' ';
  if (i % 10==0) {
    num += '\n\n';
  }
}
console.log(num);
