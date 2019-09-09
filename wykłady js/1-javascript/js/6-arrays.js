'use strict';

let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = "Łukasz";

imiona.push('Geralt');

// console.log("imiona", imiona);

imiona.pop();
imiona.pop();

// console.log("imona po pop()", imiona);


// console.log(imiona.unshift('Robert'));

// console.log(imiona);

// console.log(imiona.shift());

// console.log(imiona);

// console.log(imiona.length);

// imiona.push("Kaja");
// imiona.join(' ')
// imiona.reverse()
// console.log(imiona)

// for (let i = 0; i < imiona.length; i++) {
//     console.log(i + 1 + "                        " + imiona[i]);
// }


//for (let i = imiona.length-1; i >= 0 ; i--) {
//    console.log(imiona[i]);
//}



//imiona.forEach(function (element, i) {
//    console.log('Element nr ' + i + ' = ' + element);
//});

//console.log( imiona.join(" - ") );
//
//imiona.sort();
//
//imiona.reverse();
//
//console.log(imiona);
//


// let imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];

// let zbiorImion = imionaMeskie.concat(imiona);

// console.log(zbiorImion);

// console.log(zbiorImion.indexOf("Mariusz"));

// console.log(Array.isArray(zbiorImion));

// console.log(zbiorImion.slice(2, 5));

// zbiorImion.splice(2, 3, "Julek", "Krzyś");

// console.log(zbiorImion);

// console.log(zbiorImion.toString());



console.log(imiona.sort())


let tab = [{}, {}]