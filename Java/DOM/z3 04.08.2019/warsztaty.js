/*Function value()

let element = document.getElementById( 'Imię' );
if ( value !== null ) {alert( 'uzupełnij pole' );
}
console.log( names.join() );
//checkbox
*/
document.getElementById("formularz").lastElementChild.addEventListener('clik', function (e){
    e.preventDefault();
    let fname = document.getElementsByName("fname")[0]
    let iname = document.getElementsByName("Iname")[0]
    let email = document.getElementsByName("email")[0]
    let zgoda = document.getElementsByName("zgoda")[0]
if (fname.value =="") {
    document.getElementById("fname").style.display = "inline-block"

}
else {
    document.getElementById("fname").style.display = "none"
}
if (iname.value =="") {
    document.getElementById("Iname").style.display = "inline-block"
}
else {
    document.getElementById("Iname").style.display = "none"}
if (email.value =="") {
    document.getElementById("email").style.display = "inline-block"
}
else{
    document.getElementById("email").style.display = "none"}

if (zgoda.chcked ==false) {
    document.getElementById("zgoda").style.display = "inline-block"

}
else{
    document.getElementById("zgoda").style.display = "none"
}
})