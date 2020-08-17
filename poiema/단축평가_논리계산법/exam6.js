// function getStringLength(str){
//     str = str || '';
//     return str.length;
// }

// getStringLength(); // 값이 안나오고 있다. 
// // console.log(str.length); // 값이 안나오고 있다.
// getStringLength('hi');
// console.log(str);


function getStringLength(str = ''){
    return str.length;
}

getStringLength();
getStringLength('hi');
