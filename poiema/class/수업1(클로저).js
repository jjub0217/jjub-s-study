// function outer(){
//     const free = 10;
//     function inner(){
//         console.log(free); // 10 <- 렉시컬 환경은 살아져있기때문에 실행이 된다.
//     }
//     inner();
// }
// outer();


// 카운트 상태 변경 함수
// const increase = function () {
//     // 카운트 상태 변수
//     let num = 0; // <- 얘 0으로 초기화되는 동작을 계속 실행된다. 

//     // 카운트 상태를 1만큼 증가 시킨다.
//     return ++num;
// };

// // 이전 상태를 유지하지 못한다.
// console.log(increase()); // 1
// console.log(increase()); // 1
// console.log(increase()); // 1

// 위코드의 단점을 보완하여 아래처럼 클로저를 만든다. 

// 카운트 상태 변경 함수
// const increase = (function () {
//     // 카운트 상태 변수
//     let num = 0; // <- 얘는 리턴함수 안에 들어가면 안된다. 들어가면 계속 0 으로 초기화된다.
//     // └> 초기값을 0 인 상태로 유지한다.
//     // 클로저
//     return function () {
//         // 카운트 상태를 1만큼 증가 시킨다.
//         return ++num;
//     };
// }()); // <- 현재 전역 실행 컨텍스트만 있는 상태이다.

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3

//--------------------------------------------
// return ++num  /*과*/ return num++ /* 의 차이는?*/
//--------------------------------------------

// 아래코드도 클로저를 만든 코드이다. 
const counter = (function () {
    let num = 0;
    return {
        increase() {
            return ++num;
        }, // <- increase는, 리턴하기 전에 만들어진다. : 얘의 상위스코프는 let num = 0 이다.
        decrease() {
            return --num;
        }
    };
}());

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.increase()); // 3
// // └> 이건 패턴이니까 외워두자.

// // 클로저를 왜 쓰냐? 상태를(위의 counter 함수같은 경우에 num) 안전하게 변경하고 유지하기 위해 사용한다.
// //-----------------------------------------------------------

// // 이 코드도 위의 클로저와 같은 동작을 하는 코드이지만, 안전하지 않다. 
// // 왜냐면, 아래코드의 num 은 퍼블릭한 프로퍼티 이기 때문이다.
// const counter = {
//     num: 0,
//     increase() {
//         return ++this.num;
//     }, // <- increase는, 리턴하기 전에 만들어진다. : 얘의 상위스코프는 let num = 0 이다.
//     decrease() {
//         return --this.num;
//     }
// };

// console.log(counter.increase()); // 1
// console.log(counter.increase()); // 2
// console.log(counter.increase()); // 3

//------------------------------------------------------------------------

// 아래코드는 위위의 클로저를 생성자 함수 버전으로 바꾼것이다.
function Counter(){
    this.num = 0;
    this.increase = function(){
        return ++ this.num
    }
}

const c = new Counter();

console.log(c.increase()); // 1
console.log(c.increase()); // 2
console.log(c.increase()); // 3
c.num = 100;
console.log(c.increase()); // 101

// └> this 에 묶이면 안된다.


// 외부함수가 있어야 하고, 중첩함수가 있어야 한다.
function Counter(){
 
}



















