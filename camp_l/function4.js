// 생성자 함수로 함수를 만드는 방법
/* Function 에 new 연산자를 붙혀서 실행하면 함수가 만들어지고
 그 함수를 특정 변수에 할당하는 방법이다. */
// function 이라는 것은 객체를 만드는 방법 중 하나다.

// new Function(a) // <- a 라는 매개변수를 넣을려면 반드시 문자열로 넣어야 한다. 
// 매개변수가 끝나면 마지막에 함수를 바디를 써야 한다. 
const sum = new Function('a', 'b', 'c', 'return a + b + c'); 

console.log(sum(1, 2, 3)); // 6
