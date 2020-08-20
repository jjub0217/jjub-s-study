// indexOf 내장함수
//      - indexOf 안에 들어가는 매개변수는 요소의 값이 된다.  
//      - 배열에서 원하는 항목이 몇번째에 있는지 알려주는 함수
//      - 특정값과 일치하는 요소를 찾을때 사용한다. 


// 과연, 토르가 몇번째 있는 요소일까요?
const superHeroes = [ '아이언맨', '캡틴 아메리카', '토르', '닥터스트레인지'];

const index1 = superHeroes.indexOf('토르') // <- indexOf 안에 들어가는 매개변수는 요소의 값이 된다.  
console.log(index1); // 2 <- 2번째 인덱스에 '토르' 라는 요소가 존재한다.

const index2 = superHeroes.indexOf('닥터스트레인지')
console.log(index2); // 3 <- 3번째 인덱스에 '닥터스트레인지' 라는 요소가 존재한다


////////////////////////////////////////////////////////////////////

const highlight = ['윤두준', '이기광', '양요섭','손동운'];
const pows = [];
const member = highlight.indexOf('양요섭');
console.log(member); // 2
// └> '양요섭' 이란 요소는 highlight 라는 배열에서 1번째 인덱스에 있는 요소이다. 

// for(let i = 0; i < highlight.length; i++) {
//     pows.push(`${highlight[i]}는 너무 귀여워`);
// }
// console.log(pows); 
// └> [ '윤두준는 너무 귀여워', '이기광는 너무 귀여워', '양요섭는 너무 귀여워', '손동운는 너무 귀여워' ]

for(let i = 0; i < member; i++) {
    pows.push(`${highlight[i]}는 너무 귀여워`);
}
console.log(pows); // [ '윤두준는 너무 귀여워', '이기광는 너무 귀여워' ]