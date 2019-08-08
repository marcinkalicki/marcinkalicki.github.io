'use strict';
let array = [1, 2, 3, 4, 5, 6];
function addAndMultiply(arrayFactor){
    let addResult = 0 ;
    let multiplyResult = 1 ;
    
  
    for(let i = 0 ; i < arrayFactor.length ; i++){
      multiplyResult *= arrayFactor[i];
      addResult += arrayFactor[i];
    }
    
    console.log('Suma elementów tablicy = ' + addResult);
    console.log('Iloczyn elementów tablicy = ' + multiplyResult );
    
  }
  
  addAndMultiply(array);


