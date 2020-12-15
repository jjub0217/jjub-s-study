const add = (a, b) => {
  return a + b
}
console.log(add(2, 10));


const sum = (x, y) => x + y   // 함수 몸체 내부가 한줄일 경우 중괄호 생략 가능(리턴문이 숨겨져있는 것이다.)
console.log(sum(20, 10));


// 매개변수를 주는 소괄호는, 매개변수가 하나일때는 소괄호 생략할수 있다.

const callMyName = name => console.log(`내 이름은 ${name}이다`);   // 함수 몸체 내부가 한줄일 경우 중괄호 생략 가능(리턴문이 숨겨져있는 것이다.)
callMyName('주현');