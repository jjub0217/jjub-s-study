// var x = 'global';

// function foo(x){
//     console.log(x); // global
// }
// foo(x);

// if(true){
//     console.log(x); // global
// }

// console.log(x); // global

// function couple(){
//     var boyFriend = '요섭'
//     var boyFriend = '준호'
//     // <- var 키워드로 선언한 변수는 같은 스코프 내부에서 중복 선언이 가능하다
//     console.log(boyFriend); // 준호
// }
// couple();

// function you(){
//     let boyFriend = '요섭'
//     let boyFriend = '세진'
//     // 안된다. let 키워드로 선언한 변수는 같은 스코프 내부에서 중복 선언이 불가능하다. 
//     console.log(boyFriend); // Syntax Error : boyFriend has already been declared
// }
// you();


// function me(){
//     const im = '주현'
//     const im = '나'
//     // 안된다. const 키워드로 선언한 변수는 같은 스코프 내부에서 중복 선언이 불가능하다. 
//     console.log(im); // Syntax Error : im has already been declared
// }
// me();


// function outer(){
//     var z = 'outer의 지역 변수 z'
//     console.log(z); // outer의 지역변수 z
//     if(true){
//         console.log('여기서도 z는 outer의 지역변수이다'); 
//         // 여기서도 z는 outer의 지역변수이다
//     }
// }
// outer();


// foo(); // global function foo <- 전역 스코프에서 정의된 foo 함수가 호출된다.

// function foo() { // <- 외부함수 bar 의 상위 스코프
//     console.log('global function foo'); // <- 
// } // <- 전역 스코프에서 정의된 foo 라는 식별자에 함수 객체 할당 됨

// function bar() {  // <- 외부함수 bar (중첩 함수 foo의 상위 스코프)
//     function foo() { //  <- 중첩 함수 foo
//         console.log('local function foo'); // local function foo 
//     } // <- 지역 스코프에서 정의된 foo 0p라는 식별자에 함수 객체 할당 됨

//     foo(); // ① local function foo <- 지역 스코프에서 정의된 foo 함수가 호출된다. 
// }
// // <- 전역 스코프에서 정의된 bar 라는 식별자에 함수 객체 할당 됨
// bar(); // <- 전역 스코프에서 정의된 bar 함수가 호출된다. 

// foo(); //  global function foo 

// var x = 1;

// function foo() {
//   var x = 10;
//   bar(); // <- 여기서 호출이 안되나?
// }

// function bar() {
//   console.log(x); // 1
// }

// foo(); // ?  1
// bar(); // ?  1

// // function foo() {
// //     var x = 10;
// // }
// // foo();


// var globalParameter = '전역변수'; //

// function global() {
//   console.log(`여기는 지역 스코프 영역이지만, ${globalParameter}를 참조(사용)할수 있다.`);
//   var x = 'local 함수 scope내의 변수'
//   console.log(x);
// }
// global(); //


// if (true) {
//   var y = 'local 코드블록문 내의 변수'
//   console.log(`여기는 코드 블록문 영역이지만, ${globalParameter}를 참조(사용)할수 있다.`);
// } //


// console.log(`여기는 ${globalParameter}를 참조(사용)할수 있는 전역 스코프이다`);
// console.log(y); // local 코드블록문 내의 변수
// console.log(x); // Reference Error : var 키워드로 함수 몸체 내부에서 선언한 변수는 지역변수이기 때문에
//                 // 이렇게 전역에서 참조할수 없다

var x = 'global x'
var y = 'global y'

function outer() {
  var z = 'outer\'\s local z';
  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  function inner(){
    var x = 'inner\'\s local x'
  console.log(x); // inner's local x
  console.log(y); // global y
  console.log(z); // outer's local z
  }
  inner();
}
outer();

console.log(x); // global x
console.log(z);