// join 내장함수
// 배열 안에 있는 값들을 문자열의 형태로 합쳐줄때 사용하는 함수다.
// 원본 배열을 변경하지 않는다. 


const array = [ 1, 2, 3, 4, 5 ];

console.log(array.join()); // 쉼표 사이사이에 배열 안의 요소값들을 넣어서 string 으로 만들어준다.
console.log(array); // 1,2,3,4,5
console.log(typeof array); // object

const arr1 = array.join();
console.log(arr1); // 1,2,3,4,5
console.log(typeof array); // object

const arr2 = array.join('');
console.log(arr2); 12345

const arr3 = array.join(' ');
console.log(arr3); // 1 2 3 4 5

const arr4 = array.join('는 뭘까? ');
console.log(arr4); // 1는 뭘까? 2는 뭘까? 3는 뭘까? 4는 뭘까?

const arr5 = array.join(', ');
console.log(arr5); // 1, 2, 3, 4, 5