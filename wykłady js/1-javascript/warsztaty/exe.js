// let wyplata;


// function suma(podstaw, premia) {
//     wyplata = podstaw + premia;
//     return wyplata;
// }
// suma(5000, 7000)

// let dreams = `chciał bym zarabiać ${wyplata}`
// document.getElementsByTagName('p').innerHTML = dreams
// document.getElementById("exe").innerHTML = dreams;
// console.log(dreams)
let global

function iloczyn(par1, par2, par3) {
    let wynik = par1 * par2 * par3
    return wynik;
}
global = iloczyn(1, 4, 5)
console.log(global)

if (global % 3 == 0) {
    console.log(`Nasz liczba ${global} jest podzielna przez 3`)
} else {
    console.log(`Nasz liczba ${global} nie jest podzielna przez 3`)
}

let tab = ["jan", 'ela', 'robert', 'michal', 'rafal']
// let i in tab







// Napisz funkcję ktora oblicza silnie n.

// Funkcja przyjmuje parametr n i zwraca wynik - silnia n (n!)

// Wariant 1 - funkcja używa pętli
// Wariant 2 - rekurencja - wywołuje samą siebie













function silniaPrzezPetle(n) {
    let wynik = 1;

    if (n < 0) {
        return "Silnia od ujemnej liczy nie istnieje";
    } else if (n < 2) {
        return wynik;
    }

    //obsluga silni :)
    for (n; n > 0; --n) {
        wynik = wynik * n;

    }

    return wynik;
}

console.log("pentla for", silniaPrzezPetle(-1));


function silnia(n) {
    let wynik = 1;
    console.log(wynik)
    if (n < 0) {
        return "Silnia od ujemnej liczy nie istnieje";
    } else if (n < 2) {
        return wynik;
    }

    //obsluga silni :)
    wynik = n * silnia(n - 1);

    return wynik;
}

console.log("silnia ", silnia(4));