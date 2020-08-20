// concat 내장함수
// 여러개의 배열을 한개의 새로운 배열로 합쳐주는 함수다. 
// 원본 배열을 변경하지 않는다.






// arr 이란 배열과 arr2 이란 배열을 합쳐라. 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


// const concat = arr1.concat(arr2);
// console.log(concat); // [ 1, 2, 3, 4, 5, 6 ]

// ┌바로 위의 concat 내장함수 대신, 스프레드문법을 사용하여 구현해낼수도 있다. 
const concat = [...arr1, ...arr2]; // <- 스프레드 문법
console.log(concat); // [ 1, 2, 3, 4, 5, 6 ]

console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]