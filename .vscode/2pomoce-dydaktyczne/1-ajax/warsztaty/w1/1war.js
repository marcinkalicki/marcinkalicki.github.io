

/* Stwórz przycisk “Pobierz dane”. Ustaw nasłuch zdarzenia click na
tym przycisku. Po kliknięciu wywołaj funkcję getData.


Funkcja getData(event) pobiera z serwera objekt JSON ( URL =
https://jsonplaceholder.typicode.com/users/1 ).

Dane – id, nazwę użytkownika, adres url – dodaj do strony.
Napisz kod za pomocą czystego JavaScript i użyj do funkcji fetch().
*/
function.getData(event) {
    
}


fetch('https://jsonplaceholder.typicode.com/users/1')
.then(number =>response.json())
.then(response=>{

console.log(username);
});
/*
$ ('#btnGetData').click(function() {
    let numbeInput = document.getElementById("number").value
    console.log(numbeInput)
    
        fetch(`https://jsonplaceholder.typicode.com/posts/${numbeInput}`)
        .then(response =>response.json())
        .then(response=>{
            console.log(response);
            $("#resBody").text(response.body)
            $("#restName").text(response.id)
            $("#resTitle").text(response.title)
    
        
    
        });
    })


