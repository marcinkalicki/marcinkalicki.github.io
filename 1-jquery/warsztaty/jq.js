$(function (){
    let formPizzaOrder = $("#pizza-order");
    let name = $("#name");
    let lastName = $("#lastname");
    let ulica = $("#ulica");
    let numer = $("#numer");
    let kod = $("#kod");
    let miasto = $("#kod"); 

    let lagodny = $("#lagodny"); 
    let ostry = $("#ostry"); 
    let agreement = $("#agreement"); 
    let submit = $("#submit"); 
/*    
    */
    let priceTable = [
        {
            id:1,
            price:29

        },

        {
            id:2,
            price:29
        },
        {
            id:3,
            price:29
        },
        {
            id:4,
            price:29
        },
        {
            id:5,
            price:29
        }

    ]
// blur na input

    pizza.change(function() {
        let pizzaPrice = 0

        let pizzaType= $(this).val();
        console.log("Wybrana pizza", pizzaType)
    
        if (pizzaType == 0) {
        prince.text("0 PLN");
        return;
        }
        pizza.change = $ (this).val();
        priceTable.forEach(function(element) {  
            if (element.id == pizzaType) {
                pizzaPrice = element.price;
                price.text(pizzaPrice = "PLN");
                return false
            }
        });
      
    }
)})
// zdarzenia obsługujące walidację formularza dokończyć!!!!
formPizzaOrder.submit(function(){
    errors.empty();
    let errorsArray = [];
/*

    if let errorsArray any[] {
        errorsArray.push("Uzupełnij pole : Imię");
       }
    if let errorsArray any[] {
        errorsArray.push("Uzupełnij pole : Nazwisko");
       }
       if 
errorsArray.forEach()
}

let order OBject = {

}
})
*/
let orderObject = {
    firstName: $.trim(firstName.val()),
    lastName: $.trim(lastName.val()),
    ulica: $.trim(ulica.val()),
    numer: $.trim(numer.val()),
    kod: $.trim(kod.val()),
    miasto: $.trim(miasto.val()),
    pizza: $.trim(pizza.val()),
    sos: [lagodny.is(":checked"), ostry.is(":checked")],

};
console.log(JSON.stringify(orderObject));
console.log(orderObject);
return false;

/*
function cheackValue(data){
    console.log(data);
    if (data == ""){
        return true;
    }
}
*/

/*
$( function() {
    // kod do wykonania
    } );

/*
    <script>
$( "select" )
  .change(function () {
    var ;str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  })
  .change();
</script>

pizza.change = $ (this).val() */