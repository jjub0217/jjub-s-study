// unshift 내장함수
// 배열의 맨 앞에 새로운 요소를 추가 삽입하여 새로운 배열을 생성
// 원본 배열 변경된다.

const numbers = [10, 20, 30, 40];

const value = numbers.unshift(5); 
console.log(value); // 5 <- 배열에 추가 삽입하는 요소
console.log(numbers); // [ 5, 10, 20, 30, 40 ] <- 맨 앞에 5 라는 요소를 추가 삽입 

numbers.unshift(6);
console.log(numbers); // [ 6, 5, 10, 20, 30, 40 ] <- 맨 앞에 6 라는 요소를 추가 삽입 
