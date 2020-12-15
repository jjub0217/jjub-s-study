// 아래코드는 위위의 클로저를 생성자 함수 버전으로 바꾼것이다.
// function Counter() {
//     this.num = 0;
//     this.increase = function () {
//         return ++this.num
//     }
// }

// const c = new Counter();

// console.log(c.increase()); // 1
// console.log(c.increase()); // 2
// console.log(c.increase()); // 3
// c.num = 100;
// console.log(c.increase()); // 101

// └> this 에 묶이면 안된다. 아래에 고쳐보자.



// 외부함수가 있어야 하고, 중첩함수가 있어야 한다.
// function Counter() {
//     this.num = 0;
//     // <- 그리고 여기에 바로 아래처럼 increase 메서드를 추가하려고 한다.
//     // this.increase = function(){
//     //     return ++this.num
//     // }
// }

// Counter.prototype.increase = function () {
//     return ++this.num
// }
// // 시맨틱적으로 한몸인데 Counter 생성자함수와 prototype 객체가 분리되어있으니까
// // 아래 코드로 한몸으로 묶어보자.


// const c1 = new Counter(0);
// const c2 = new Counter(100);


// console.log(c1.increase());
// console.log(c1.increase());
// console.log(c1.increase());
// console.log(c1.increase());

//------------------------------------------------------


const Counter = (function () {
    function Counter(num) {
        this.num = num;
    }
    Counter.prototype.increase = function () {
        return ++this.num
    }
    return Counter;
})();


const c1 = new Counter(0);
const c2 = new Counter(100);

console.log(c1.increase());
console.log(c1.increase());
console.log(c1.increase());

console.log(c2.increase());
console.log(c2.increase());
console.log(c2.increase());

