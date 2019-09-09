/*

let global
funkcjon iloczyn(par1, par,2, par3)

let wynik;
    wynik = par1 * par2 * par3,
         return wynik;
global = iloczyn(1,2,3)


if(global % 3== 0){

    console.log(`nasza liczba $(global)jest podzielnona przez 3`)
else {
        console.log(`nasza liczba $(global)nie jest podzielona przez 3`)    
    }
}
*/


////let tab = [ 'Jan', 'Ela', 'Robert', "michal", " jakub" ];
//for(let i=0; i < tab.length; i++) {
//console.log 
    

// tel imie = "rafal"

// names.forEach( function( element, index1 ) {
//     console.log(i + 1 + "Imię to:" + tab[i] )
//     }   

function silniaPrzezPetle(n) {
    let wynik = 1;
    if (n <2) {
    return wynik;
    }

    //obsługa silni:)
    for (n; n> 0; --n) {
        wynik = wynik * n;
    }
    return wynik;
}
console.log("pentla for", silniaPrzezPetle(4));

function silnia(n) {
    let wynik = 1;
    if(n<0) {
        return "Silnia od ujemnej liczby nieistnieje";
    } else if (n<2) {
        return wynik;
    }
    wynik = n * silnia(n-1);
    return wynik;
}
console.log("silnia rekurencja ", silnia(4));



}