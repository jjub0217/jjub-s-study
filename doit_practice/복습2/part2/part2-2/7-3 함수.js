let num1 = 20;
let num2 = 30;

let result1 = function(x, y){
    let sum1 = x + y;
    return sum1;
}
console.log(result1(num1, num2));


let result2 = (x, y) => {
    let sum2 = x + y;
    return sum2;
} 
console.log(result2(30,40));

let result3 = (x, y) => x + y;
console.log(result3(40,60));
