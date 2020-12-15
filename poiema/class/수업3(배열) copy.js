// const arr = [1, 2];

//----------------------------------------------------

// myPush 라는, 기존 push 배열 메서드의 동작을 하는 메서드를 
// 직접 만들어봐라. (프로토타입 객체로부터 상속받아서, "배열"로 myPush 를 호출할수 있어야 한다. )

// Array.prototype.myPush = function () {
//   const num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr += num;
//   }
//   return arr;
// }

// const arrResult = new Array();
// console.log(arrResult);
// console.log(arr);
// console.log(arr.myPush(3, 4))



const arr = [1, 2];


// 방법1
arr[arr.length] = 3;
// console.log(arr); // [ 1, 2, 3]


// 방법2
Array.prototype.myPush = function (...arguments) { // <- Rest 파라미터
  console.log(arguments); // [3] <----------------------------------┐
  console.log(this); // [ 1, 2 ] 원본베열                           │
  console.log(arguments.length); // 1                               │
  for (let i = 0; i < arguments.length; i++) { //                   │
    console.log(arguments[i]);// 3 <--------------------------------│
    this[this.length] = arguments[i] //                             │
  } //                                                              │
  return this.length; //                                            │
} //                                                                │
//                                                                  │
const arr2 = [1, 2] //                                              │
// console.log(arr2.myPush(1, 2)); // 5 <- length 값을 반환한다.     │
console.log(arr2.myPush(3)); // 3 <- length 값을 반환한다.  <--------┘         
// arr2.myPush(1, 2);
console.log(arr2); // [1, 2, 3, 1, 2]

// //------------------------------------------

// const arr3 = [1, 2]
// // arr3.push([3, 4]);
// // console.log(arr3); // [ 1, 2, [ 3, 4 ] ]

// arr3.concat([3, 4]);
// console.log(arr3); // [ 1, 2 ] <- 원본 배열이 변하는 뮤테이터가 아니고 억세서이기 때문이다.

// // const arr3Result = arr3.concat([3]);  <---------┐
// // const arr3Result = arr3.concat(3); // <---------┤ 같은 동작을 한다.
// const arr3Result = ([...arr3, 3]); // <------------┘// <- : 스프레드 문법(쫘악 핀다)


// console.log(arr3Result); // [1, 2, 3] <- 원본 배열이 변하는 뮤테이터가 아니고 억세서이기 때문이다.

// // //------------------------------------------------------

// const arr4 = [1, 2, 3]
// // const copy = arr4.slice(); // [ 1, 2, 3] <--------┐
// // const copy = arr4.slice(0, 3); // [ 1, 2, 3] <----┤ 같은 동작을 한다.
// const copy = [...arr4]; // [ 1, 2, 3] <--------------┘// <- : 모던한 방법.
// console.log(copy); // [1, 2, 3]

// console.log(copy === arr4); // false : 서로의 참조값이 다르기 때문
// console.log(copy[1] === arr4[1]); // true <- 얕은복사

// // //--------------------------------------------------------------

// const numbers = [1, 2]
// numbers.forEach((v, i, arr) => {
//   console.log(v, i, arr);
// })
// /* 1 0 [ 1, 2 ]
//      2 1 [ 1, 2 ] */

// //----------------------------------------------------------

// Array.prototype.myForEach = function (callback, thisArg) { // thisArg : 옵션이다. 얘를 쓰면 this 를 바꾸라는 뜻이다 
//   if (typeof callback !== 'function') {
//     throw new TypeError // <- 타입에러 객체를 만드는 것이다. 
//     (`${callback} is not a function`);
//   }
//   // thisArg 가 undefined 일수도 있고 아닐수도 있다.  
//   thisArg = thisArg || globalThis;

//   console.log(this.length); // 3


//   for (let i = 0; i < this.length; i++) {
//     callback.call(this[i], i, this);
//   }
// }

// const arr5 = [1, 2, 3];
// // arr5.myForEach(); // 3 
// arr5.myForEach((v, i, arr) => {
//   console.log(v, i, arr);
// }); // 3 

// // [1].forEach(1)

// //------------------------------------------------------------