
//document.getElementById( "link" ).addEventListener("click", function(e){
   // e.preventDefault();
    

// console.log(document.getElementById("formularz").lastElementChild)
document.getElementById("formularz").lastElementChild.addEventListener('click', function (e){
    e.preventDefault();
    
    let fname = document.getElementsByTagName('input')[0].value;
    let iname = document.getElementsByTagName("input")[1].value;
    console.log("jego imię to :"+ fname + "a nazwisko to :" + iname)
})
