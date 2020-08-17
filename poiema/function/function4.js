let add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7

/////////////////////////////////////

let add1 = (function () {
    let a = 10;
    return function (x, y) {
        return x + y + a; // a = 10;
    }
})();
console.log(add1(1, 2)); // 13 

// 바로 위의 정상적으로 동작하는 함수를 바로 아래 코드처럼 생성자 함수로 
// 바꿀수 있지만 아래처럼 Function 생성자 함수로 함수를 만들면
// 함수가 동작하지 않는다. 

let add2 = (function(){
    let a = 10;
    return new Function('x', 'y', 'return x + y + a');
})();
console.log(add2(1, 2)); // ReferenceError


/////
// 화살표 함수

const add3 = (x, y) => x + y;

console.log(add3(1, 2));  // 3
