// 조건문

// 변수 x 가 1보다 크면 코드블럭을 실행하고 크지 않으면 실행하지 않는다. 
// 이런식으로 조건을 주어지게 된다. 
// 조건식은 불리언값으로 평가될수 있는 표현식이다. 
// 코드의 실행흐름을 제어할 수 있는 문이다. 

// 자스는 2가지의 조건문이 있다. (if...else / switch)

let num = -1;
// let kind;

// if(num > 0) {
//     kind = '양수';
// }
// console.log(kind); // 양수

if(num > 0) {
    kind = '양수';
}else{
    kind = '음수';
}
console.log(kind); // 양수



if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind);

// 위의 if 제어문을 아래처럼 삼항 조건 연산자로 나타낼수 있다. 

// 1. 
let kind = num > 0 ? '양수' : (num < 0 ? '음수' : '영');
// num > 0  <- 이 표현식 자체가 true 임을 나타내므로
// 위의 표현식은 그냥 'num' 으로 나타낼수 있다. 
console.log(kind); 

// 2. 
let kind = num ? (num > 0 ? '양수' : '음수') : '영'

console.log(kind);
