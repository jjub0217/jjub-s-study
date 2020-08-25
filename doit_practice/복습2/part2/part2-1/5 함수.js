const add = function (a, b) {
    let sum = a + b;
    return sum;
}
console.log(add(10, 20));




let result1 = (function (a, b) {
    let sum = a + b;
    return sum;
})(25, 15);
console.log(result1);




let result2 = (function (a, b) {
    return a + b;
})(40, 30);
console.log(result2);


let result3 = (a, b) => {
    return a + b;
}
console.log(result3(40,60));

let result4 = (a, b) => a + b;
console.log(result4(50,60));

