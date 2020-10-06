// // 중첩함수가 외부 함수를 돕는 헬퍼 역할을 한다. 
// function couple(men, female) {
//     let boyFriend = men

//     function girlFriend() {
//         let me = female;
//         console.log(`${boyFriend}와 ${me}은 커플이다`);
//     }
//     girlFriend();
// }
// couple('james', 'kelly')
// couple('john', 'tiffany')





// /*-------------------------------------------------------------*/

// // 콜백함수도 고차함수에 전달되어 헬퍼 역할을 한다.
// function couple(male, female, printed) {
//     let boyFriend = male;
//     let girlFriend = female;
//     printed(boyFriend, girlFriend);
// } // <- 고차함수 

// const print = function (boyFriend, girlFriend) {
//     console.log(`${boyFriend}와 ${girlFriend}이는 커플이다`);
// } // <- 콜백함수 : 콜백함수가 고차함수에 전달된다.

// couple('james', 'kelly', print);
// couple('john', 'tiffany', print);

//--------------------------------------------------------------

// function repeat(n, condition) {
//     for (let i = 0; i < n; i++) {
//         if (condition) {
//             console.log(i);
//         } 
//     }
// } // <- 반복을 하는대, 매개변수 만큼 반복한다. 반복하면서 반복횟수를 출력한다.
// repeat(3) // <- 3번 반복
// repeat(2) // <- 2번 반복


//  위 코드와 같은 코드이다. (아래 코드는 콜백함수를 매개변수로 받아오는 코드이 다)
// function repeat(n, f) {
//     for (let i = 0; i < n; i++) {
//         f(i) 
//     }
// }

// repeat(3, console.log) // <- 3번 반복

// function repeat(n, f){
//     for(let i = 0; i < n; i++){
//         f(i)
//     }
// }

// function printOdd(n){
//     // .... <- 할일을 만들어라.
//     if( n % 2 ){
//         console.log(n);
//     }
// }

// repeat(3, printOdd)
//--------------------------------
// console.log('1');

// setTimeout(function () { // <- 일정시간이 경과된 이후에 콜백함수를 호출하는 함수이다.
//         console.log('hello');
//     }, // <- 콜백함수이다. 
//     1000)

// console.log('2');

// : 1 2 hello
// ------------------------------------


let array = [1, 2, 3]


// 배열 요소의 값들을 제곱해라
let res = array.map(v => v * v);
console.log(res);

// 배열의 홀수만 추출해라
let res2 = array.filter(v => v % 2);
console.log(res2);

let res3 = array.reduce((p, c) => p + c, 0);
console.log(res3);