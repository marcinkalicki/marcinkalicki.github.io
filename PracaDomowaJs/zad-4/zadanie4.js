'use strict '
function SumaIloczyn(parametr) {
   
    let tablica = [];
    tablica = parametr;
  
    let suma = 0;
    
    for (let i = 0; i < tablica.length; i++) {
       suma =  suma + Math.pow(tablica[i], 2) ;
     }  
  
    console.log("Suma kwadratów liczb w tablicy wymosi: " + suma + "."); 
     

    return suma; 
}
SumaIloczyn([1, 2, 3, 4, 5, 6]);

