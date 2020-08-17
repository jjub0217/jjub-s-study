// function addNumber(a, b) { // <- 이 줄에서 말하는 a 와 b 는 함수를 실행할때 "필요하다고" "미리" "지정"한 값이다. 
//     let sum = a + b;
//     console.log(sum);
// }

let num1 = Number(prompt('첫번째 숫자는?'));
let num2 = Number(prompt('두번째 숫자는?'));
addNumber(num1, num2);

function addNumber(a, b){
let sum = a + b;
alert(`두수를 더한 값은 ${sum}입니다.`);
} 