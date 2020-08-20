const highlight = ['윤두준', '이기광', '양요섭','손동운'];
const pows = [];
const member = highlight.indexOf('양요섭');
console.log(member); // 2
// └> '양요섭' 이란 요소는 highlight 라는 배열에서 2번째 인덱스에 있는 요소이다. 

//////////////////////////////////////////////////////////////////////////////////


for(let i = 0; i < highlight.length; i++) {
    pows.push(`${highlight[i]}는 너무 귀여워`);
}
console.log(pows); 
// └> [ '윤두준는 너무 귀여워', '이기광는 너무 귀여워', '양요섭는 너무 귀여워', '손동운는 너무 귀여워' ]



for(let i = 0; i < member; i++) {
    pows.push(`${highlight[i]}는 너무 귀여워`);
}
console.log(pows); 
//  └> [ '윤두준는 너무 귀여워', '이기광는 너무 귀여워' ]

