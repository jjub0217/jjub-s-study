// 단축평가와 배열 내장함수 includes / 화살표 함수

//  특정값이 여러 값중에 하나인지 확인해야 할때 사용한다

//  방법 1
// function isAnimal(text){
//     // 텍스트가 고양이 이거나 개 이거나 거북이 이거나 너구리 이거나 
//     return (
//         text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
//     ) // <- text 가 이 들 중에 하나라면, true 를 반환해라
// }
// console.log(isAnimal('개'));
// console.log(isAnimal('노트북'));


//  방법2
// function isAnimal(text){
//     // 텍스트가 고양이 이거나 개 이거나 거북이 이거나 너구리 이거나 
//     const animals = ['고양이','개','거북이','너구리'];
//     return  animals.includes(text) 
//     /*  includes : 
//             - 배열 내에 특정 요소가 포함되어있는지 확인해서, 
//               true 또는 false 를 반환한다.
//             - 첫번째 인수로 검색할 대상을 지정한다. 
//     // <- 만약에 배열안에 인수를 통해서 전달받은 매개변수 text 가 
//           존재한다면 true / 존재하지 않다면 false 를 반환해라*/
// }
// console.log(isAnimal('노트북'));
// console.log(isAnimal('개'));

//  방법3
const isAnimal = (text) => ['고양이','개','거북이','너구리'].includes(text) 

console.log(isAnimal('노트북'));
console.log(isAnimal('개'));








