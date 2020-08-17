// 조건식 ? 조건이 true 일때 실행 : 조건이 false 일때 실행
// 조건식 ? truthy 값 : falsy 값


const array = [];
// let text;    //  <┐ 이렇게 해도 되지만,
let text = ''; //    └> text 값을 공백으로 만들었다. <- 이유는, text 에 명시적으로 string 이 들어올건지 number 가 들어올건지
              //        명시적으로 미리 알려주기 위해서 '' 이라고 공백을 할당해준것이다.

console.log(array.length);

if(array.length === 0){
    text = '배열이 비어있습니다';
}else{
    text = '배열이 비어있지 않습니다.';
}
console.log(text);
// 배열이 비어있습니다.


// -------------------------------------------

const array2 = [1, 2];
const text1 = array2.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.'
console.log(text1);
// 배열이 비어있지 않습니다.


// -------------------------------------------

const condition1 = false;
const condition2 = true;

const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'foo';
console.log(value); // foo // condition1 = false / condition2 = false
console.log(value); // blabla // condition1 = false / condition2 = true
console.log(value); // 와우! // condition1 = true  / condition2 = false


