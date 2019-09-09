'use strict';

// let number = 10;

// function addNumber() {
//     number = 15;
//     let newNumber = 20;
//     console.log("zminna globalna dostępna wszędzię a teraz w funkcji ", number); //zmienna lokalna tylko wewnątrz funckji
//     console.log("zminna lokalna w funcji ", newNumber); //zmienna lokalna tylko wewnątrz funckji
// }

// addNumber();

// console.log("zminna globalna zmieniona przez funkcje ", number); //wyloguje zmienną globalną
// console.log("zmmina lokalna w funkcji ", newNumber); //błąd bo nie mamy dostępu do tej zmiennej
let a = 2;
let b = "2"
let c = []
console.log(typeof a)
console.log(typeof c)
console.log("==", a == b)
console.log("===", a === b)

console.log("dodawanie", a + b)