// shift 내장함수
// 첫번째 요소를 하나씩 배열에서 추출해준다. 그러고 배열이 빈배열이 될때까지 추출한다. 
// 원본 배열이 변경된다. 



const numbers = [10, 20, 30, 40];

const value = numbers.shift();
console.log(value); // 10 <- 배열에서 추출한 첫번째 요소.
// console.log(numbers); // [20, 30, 40] <- 요소를 추출한 결과로 원본 배열이 변경된다. 



numbers.shift();
console.log(numbers);  // [ 30, 40] <- 위에서 10 이란 요소를 추출하여 뺀 결과물에서 
//                                      또 첫번째 요소인 20이란 요소를 추출하여 뺀 결과로 원본 배열이 변경된다.


numbers.shift();
console.log(numbers);  // [ 40 ] <- 위에서 10 과 20이란 요소를 추출하여 뺀 결과물에서
//                                  또 첫번째 요소인 30이란 요소를 추출하여 뺀 결과로 원본 배열이 변경된다.

numbers.shift();
console.log(numbers);  // [ ] <- 위에서 10과 20 과 30이란 요소를 추출하여 뺀 결과물에서
//                               또 첫번째 요소인 40이란 요소를 추출하여 뺀 결과로 원본 배열이 변경된다. 

