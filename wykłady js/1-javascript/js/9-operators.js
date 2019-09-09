'use strict';

let liczba1 = 13,
    liczba2 = 5;

let wynik;

wynik = liczba1 % liczba2;
console.log(wynik);






while (liczba2 < liczba1) {
    console.log(liczba1);
    --liczba1;
}

(2 > 5) ? console.log("tak"): console.log("nie");

if (2 > 5) {
    console.log("tak")
} else {
    console.log("nie");
}


if ("2" === 2) {
    console.log("prawda");
} else {
    console.log("Nie prawda");
}


if (!(("2" !== 2) && (8 < 4))) {
    document.write("<br> prawda");
}


let liczba3 = 11,
    liczba4 = 12;


!((liczba4 >= liczba3) && (liczba4 == liczba3)) ? console.log('Większe'): console.error("mniejsze");




let kolor = "zielony"

if (kolor === "czerwony ") {
    console.log(" kolor prawidłowy")
} else if (kolor === "biały") {
    console.log(" kolor biały ")
} else {
    console.log(" nie ma takiego koloru ")
}