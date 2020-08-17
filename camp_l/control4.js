// 삼항 연산자를 이용한 조건부 실행
// 실행한 결과를 어딘가에 할당하여 사용하는 것이 좋다. 

let n = 5;
console.log(n % 5 === 0 ? '5의 배수입니다' : '5의 배수가 아닙니다.');
// 5의 배수입니다. 

const message = n % 5 === 0 ? '5의 배수입니다' : '5의 배수가 아닙니다.';
console.log(message);


console.log(0 % 2 === 0); // true 
// 0 은 2의 배수임.
console.log(0 % 2 != 0); // false 
console.log(1 % 2 != 0); // true

