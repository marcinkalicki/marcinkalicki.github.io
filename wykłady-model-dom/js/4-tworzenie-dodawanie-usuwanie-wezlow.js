"use strict";

var istniejacyWezel = document.getElementById('parFirst').children[3]; //przypisz do zmiennej istniejący węzeł

console.log(document.getElementById('parFirst').children);

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwórz nowy tekst dla elementu p


newElement.appendChild(newElementContent); //dodaj tekst do elementu p
let paragraf = document.getElementById("paragraf")
console.log("paragraf", paragraf)
paragraf.innerHTML = "<button> FFFFFFFFFFFFF</button>"


istniejacyWezel.appendChild(newElement);
console.log(istniejacyWezel);

// istniejacyWezel.removeChild(newElement);

//var parFirstDiv = document.getElementById('parFirst');
//parFirstDiv.replaceChild(newElement, istniejacyWezel); //Zamień drugi link na paragraf
var city = [

    {
        name: "W-wa",
        hotel: "Sobieski",
        cena: 100
    },
    {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }, {
        name: "Łódź",
        hotel: "Polonia",
        cena: 150
    }




]

function creteEle(tagHTML, text, attribute, attributeName) {
    let paragraf = document.createElement(tagHTML);
    let textToParagraf = document.createTextNode(text);
    let classToParagraf = document.createAttribute(attribute)
    classToParagraf.value = attributeName;
    paragraf.setAttributeNode(classToParagraf)
    paragraf.appendChild(textToParagraf)
    istniejacyWezel.appendChild(paragraf)
}

function hotele() {
    for (let i = 0; i < city.length; i++) {
        creteEle("p", city[i].hotel, "class", "green");
        creteEle("span", city[i].name, "class", "green");
        creteEle("div", city[i].cena, "class", "green");
        // let classCreat = document.createAttribute("class");
        // classCreat.value = "colorTest"
        // let classCreat2 = document.createAttribute("class");
        // classCreat2.value = "colorTest"
        // let par = document.createElement('p')
        // let span = document.createElement('span')
        // span.setAttributeNode(classCreat)
        // par.setAttributeNode(classCreat2)
        // let text = document.createTextNode(city[i].name)
        // let textSpan = document.createTextNode(city[i].cena)
        // par.appendChild(text)
        // span.appendChild(textSpan)
        // istniejacyWezel.appendChild(par)
        // istniejacyWezel.appendChild(span)
    }
}

function a() {
    alert("działam")
}

document.getElementById("btn-hotel").addEventListener("click", function (e) {

    console.log("e", e.target)


})
///* Dodaj znacznik <br> po każdym linku i usuń z nich atrybu klasy */
//var allLinks = document.querySelectorAll('a'); //przypisz do zmiennej tablicę ze wszystkimi liknami
//
//for (var i = 0; i<allLinks.length; i++ ){ //iteracja po tablicy
////	console.log(allLinks[i]);
//	 var br = document.createElement('br'); //stwórz elemen <br>
//	 allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); //Dodaj br po każdym linku
//	 allLinks[i].removeAttribute('class'); //usuń atrybut klasy
//}


document.getElementById('mainLink').addEventListener('click', function (e) {
    e.preventDefault();
    alert("nigdzie cie nie zabierze ")
})