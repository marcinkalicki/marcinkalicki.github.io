'use strict '
function SumaIloczyn(parametr) {
    /*  zapisanie tablicy jako parametr funkcji */

    let tablica = [];
    tablica = parametr;
    /*  utworzenie zmiennej do sumowania */

    let suma = 0;
    /* pętla sumująca i mnożąca kolejne elementy tablicy */

    for (let i = 0; i < tablica.length; i++) {
       suma =  suma + Math.pow(tablica[i], 2) ;
     }  

    /* wyswietlenie wyniku  - musi być przed return */
    console.log("Suma kwadratów liczb w tablicy wymosi: " + suma + "."); 
     
    /* zwrócenie wyniku działania funkcji */
    return suma; 
}
SumaIloczyn([1, 2, 3, 4, 5, 6]);

