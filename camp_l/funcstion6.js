// 만들어진 함수는 하나의 형태를 가지고 있는 객체기 때문에 
// 객체는 할당을 할수 있다. 
// 마찬가지로 함수 안에서, 마치 변수를 만들어서 밖으로 리턴을 하는 것처럼
// 함수를 만들어서 리턴을 할수도 있다. 

function plus(base) {
    return function (num) {
        return base + num;
    }
}
const plus5 = plus(5); // plus 함수의 매개변수 base 에 5 가 들어가면서 plus 함수가 실행된다.
                      // 그렇게 되면 5 + num 이라는 함수가 실행되게 된다. 
                      // 그러면서 5 + num 이라는 함수는 plus5 라는 변수에 할당이 된다. 
console.log(plus5(10)); //  plus 함수가 plus5 라는 변수에 할당되며 plus 함수가 실행되었고 
                        // 함수가 할당되었기 때문에 plus5 라는 변수를 사용해서 또 다른 함수를 실행하려고 보니까 
                        // 그 또 다른 함수는 익명함수이다. 
                        // 그러므로 그 변수에 인수를 주어 plus5 라는 함수를 실행할수 있게 되었다. 
                        
const plus7 = plus(7);
console.log(plus7(8)); // 15


// 함수는 객체이기 때문에 함수를 호출할때 마찬가지로 인자로 함수를 넣어서 그 안에서 사용하도록 만들수 있다. 
// 함수를 인자로 하여 함수를 호출하는 (함수를 호출할수 있도록) 함수를 호출해보자
function hello(c) {// 인자로 들어갈 함수를 콜백함수 c 로 하겠다. 
console.log('hello');
c();
} 
hello(function (){
    console.log('콜백');
})
/* hello
 콜백
 */