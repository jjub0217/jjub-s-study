// slice 내장함수
// 배열을 잘라내는 함수
// 제거한 요소를 반환한다.
// 원본 배열은 변경되지 않는다.

const numbers = [10, 20, 30, 40];

// numbers.slice(0,2);
// // 0 : 몇번재 인덱스의 요소부터 제거할지 
// // 2: 몇번째 인덱스의 요소전까지 제거할지
// console.log(numbers); // [10,20,30,40] <- 원본 배열은 변경되지 않늗다.

const sliced = numbers.slice(0, 2);
console.log(sliced); // [10, 20] <- 제거한 요소가 반환값


