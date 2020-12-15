// var a = 1;

// // 함수의 공개 <-----------------┐
// export function square(x) {//    │
//     return x * x;//              │
// }                                │
/*                                  │
                                    │                                  
// // 클래스의 공개 //               │ 이 스코프 밖에서도, import 할수 있도록 해주겟다. 
// export class Person {//          │
//     constructor(name) {//        │
//         this.name = name;//      │
//     }//                          │
// } // <---------------------------┘*/




// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
  return x * x;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}