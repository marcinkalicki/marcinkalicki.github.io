function sortString(napis) {
    let pobierzNapis;
    let sortNapis;
    let razemNapis;

    console.log(sortString);
    pobierzNapis = napis.split('');
    sortNapis = pobierzNapis.sort();
    razemNapis = sortNapis.join('');
 
    return razemNapis;
}

console.log( sortString('Akademia 108') );

/*
function reverseString(napis) {
    let pobierzNapis;
    let odwrocNapis;
    let scalNapis;

    pobierzNapis = napis.split('');
    odwrocNapis = pobierzNapis.reverse();
    scalNapis = odwrocNapis.join('');
    
    return scalNapis;
}

console.log( reverseString('Akademia 108') );
*/
