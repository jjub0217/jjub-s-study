// map 내장함수
//  - 배열의 요소들을 다른 값으로 매핑(설정)한 새로운 배열을 생성하는 함수이다.
//  - 배열안의 요소들을 전체적으로 변환할때 사용한다. 
//  - **인수로 전달받은 콜백함수를 반복호출 하는 것은 forEach 와 같다.**
//    하지만, forEach 문은 항상 undefined 를 반환하고, map 은 새로운 배열을 반환한다.
//  - **원본 배열 내부의 요소들을 추출해서, 새로운 배열을 반환한다.**
//  - 원본 배열은 변경되지 않는다.
// 빈배열로 map 을 돌리면 빈배열이 반환된다.



// array 라는 배열안의 모든 요소들을 제곱해서 새로운 배열을 만들어서 출력해라.
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const pows = [];
// array.forEach(function () {
//   pows.push(arr * arr);
// })
// console.log(pows); // [ 1, 4, 9, 16, 25, 36, 49, 64 ]


// 방법1
// const pow = v => v*v; // <- pow 라는 화살표 함수 정의
// const pows = array.map(pow);
// console.log(pows); // [ 1, 4, 9, 16, 25, 36, 49, 64 ]

// 방법2
const pows = array.map(arr => arr*arr);
console.log(pows); // [ 1, 4, 9, 16, 25, 36, 49, 64 ]
