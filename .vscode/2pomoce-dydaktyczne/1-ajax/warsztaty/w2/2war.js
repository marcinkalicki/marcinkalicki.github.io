let koniecLicznik = 0;
function getData() {
    //event.preventDefault();

    //let liczba = 1

    fetch(`https://jsonplaceholder.typicode.com/users`)

    .then(response =>response.json())

    .then(response=>{
        let hr = document.createElement("p") 
        //let hrk = document.createElement("p") 
        hr.innerHTML = "------------ start---------------------<br>"
        document.body.appendChild(hr)
        for (let i = 0; i < response.length; i++) {
            console.log(response)
            let paragraf = document.createElement("p");
            paragraf.innerHTML = response[i].name;
            document.body.appendChild(paragraf);
           
            
            }
          //  let hrk = document.createElement("p") 
            //hrk.innerHTML = "------------ koniec---------------------<br>"
        document.body.appendChild(hr)

    })

    
}

getData();
getData();

window.onscroll = function () {
  
    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;
    console.log("document.documentElement", document.documentElement);
    console.log("d.scrollTop", d.scrollTop);
    console.log("d.offsetHeight", d.offsetHeight);
    console.log("heigdht", height);

    if (offset === height) {
        getData()
     
        koniecLicznik += 1;
        console.log("koniec strony = "+ koniecLicznik);
    }
  
        
    
}

/*


/*



console.log(username);
});

dokument.body.appendChild(endOfData);
let d = document.createElement;
let offset = d.scrollTop =  window.innerHeight;
let height = d.offserHeight;
console.log
/*
Stwórz stronę intenretową zawierającą listę użytkowników (tj. ich ID,
IMIE i adres URL). Lista użytkowników ma być dłuższa niż wysokość
okna przeglądarki, aby włączał się mechanizm scrollowania.
Następnie podepnij pod zadrzenie onscroll funkcję, która
sprawdza, czy przewineliśmy stronę do końca.
Za każdym razem, gdy strona zostanie przescrollowana do samego
dołu pobierz za pomocą AJAX listę użytkowników w formacie JSON (
URL = https://jsonplaceholder.typicode.com/users
). Pobranych użytkowników za każdym razem doklej u dołu strony.
Napisz kod za pomocą czystego JavaScript i użyj do funkcji fetch().

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
    })*/


