let count = 0
let str = ''

// function getCount8() {
//     for (let i = 0; i <= 10000; i++) {
//         str += i;
//     }
//     return str;
// }
// let result = getCount8();

// for (let i = 0; i < result.length; i++) {
//     if (str[i] === '8') {
//         count++
//     }
// }
// console.log(count);


function getCount8() {
    for (let i = 0; i <= 10000; i++) {
        str += i;
    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] === '8') {
            count++
        }
    }
    return count;
}
console.log(getCount8());
