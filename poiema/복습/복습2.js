// let num = 2;
// let kind;

// if (num > 0) kind = '양수';
// else if (num < 0) kind = '음수';
// else kind = '영';

// console.log(kind);

// if else if 문은 삼항조건 연산자로 바꿔쓸수 있다. 

let x = 2;
let result;

if (x % 2) { // <- if 조건식의 결과는 0 이 되므로 false가 된다. 
    // 해당 조건식의 결과는 현재 false 이기 때문에 
    result = '홀수'; // <- 조건식이 true 일때 실행되는 이 문이 실행되는게 아니고 
} else {
    result = '짝수'; // <- 조건식이 false 일때 실행되는 이 문이 실행된다.
}
console.log(result);

// 위의 if else 문을 아래처럼 삼항조건 연산자로 바꿀수 있다. 

let result = x % 2 ? '홀수' : '짝수';
console.log(result);

