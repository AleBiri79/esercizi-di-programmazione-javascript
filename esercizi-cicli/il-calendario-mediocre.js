    /*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/

var mese = 'Maggio';
var inizioSett = 0;
var giorni;
var giorniSett;
   switch (mese){
     case 'Maggio': giorni = 31;
break;
   }
   console.log('Il mese di ' + mese + ' è composto da:' + '\n\n');
   for (i = 0; i <= giorni; i++){
switch(inizioSett){
  case 0: giorniSett = 'Lunedì';
  break;
  case 1: giorniSett = 'Martedì';
  break;
  case 2: giorniSett = 'Mercoledì';
  break;
  case 3: giorniSett = 'Giovedì';
  break;
  case 4: giorniSett = 'Venerdì';
  break;
  case 5: giorniSett = 'Sabato';
  break;
  case 6: giorniSett = 'Domenica';
  break;
    }

    console.log(giorniSett, i);
        if (inizioSett < 6) {
            inizioSett++;
        }
        else {
            inizioSett=0;
        }
   }
