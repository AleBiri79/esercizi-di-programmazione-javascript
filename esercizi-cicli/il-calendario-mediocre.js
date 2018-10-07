    /*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/

var mese='Maggio';
var numInizioSett=0;
var giorni;
var giorniDellaSettimana;
switch (mese) {
    case 'Gennaio': case 'Marzo': case 'Maggio': case 'Luglio': case 'Agosto': case 'Ottobre': case 'Dicembre': giorni=31;
    break;
    case 'Febbraio': giorni=28;
    break;
    case 'Aprile': case 'Giugno': case 'Settembre': giorni=30;
    break;
}

for (var u=0;
u<=giorni;
u++) {
    switch(numInizioSett) {
        case 0: giorniDellaSettimana='Lunedì';
        break;
        case 1: giorniDellaSettimana='Martedì';
        break;
        case 2: giorniDellaSettimana='Mercoledì';
        break;
        case 3: giorniDellaSettimana='Giovedì';
        break;
        case 4: giorniDellaSettimana='Venerdì';
        break;
        case 5: giorniDellaSettimana='Sabato';
        break;
        case 6: giorniDellaSettimana='Domenica';
        break;
    }
    console.log(giorniDellaSettimana, u);
    if (numInizioSett < 6) {
        numInizioSett++;
    }
    else {
        numInizioSett=0;
    }
}