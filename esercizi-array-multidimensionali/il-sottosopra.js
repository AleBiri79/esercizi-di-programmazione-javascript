/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta, in questo modo:
    Input : 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

var input = [1,2,3,4,5,6];
var nPari = input.filter(function evenInput (numeri){
  return numeri % 2 === 0;
});
var nDispari = input.filter(function evenInput (numeri){
  return numeri % 2 === 1;
});

console.log(`Numeri pari= ${nPari} \n\nNumeri dispari= ${nDispari}`);
