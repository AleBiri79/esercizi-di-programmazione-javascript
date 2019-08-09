/*
  Gatti in fila
  Scrivi un programma che prenda in input:
    - Un numero totale di gatti
    - Il numero dei gatti presenti in ogni fila
  Restituisca in output:
   - Il numero di file risultanti
   - Nel caso l'ultima fila risulti incompleta, il numero di gatti mancanti
  Esempio
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4
  Hint: Se vuoi usare l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su) ma utilizza Math.ceil (arrotonda sempre all'intero superiore).
  http://www.imparareaprogrammare.it
*/
/*ho utilizzato il metodo Math.ceil (arrotonda sempre all'intero superiore) il simbolo ${} che aggiunge la variabile all'interno della stringa*/

var gat = 44;
var fil = 6;
var gatTotali = Math.ceil (gat/fil);
var gatMancanti = (gatTotali*fil)-gat;

console.log (`${gat} gatti vengono divisi in ${fil} file per un totale di ${gatTotali} gatti per ognuna. Nell'ultima file i gatti rimanenti sono ${gatMancanti}.`);
