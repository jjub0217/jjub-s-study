// for 문과 배열


const names = [
    '멍멍이', '야옹이', '멍뭉이'
];
// names 라는 배열 안에 있는 프로퍼티들을 콘솔창에 차례대로 출력해라.
// <- 그러려면 names 의 length를 알아야 한다. 

for (let i = 0; i < names.length; i++){
    // console.log(i);  // 0 1 2    // 몇번 돌릴지 의 그 '몇'번 을 출력할건지
    // console.log(names); // ['멍멍이', '야옹이', '멍뭉이']
                          // ['멍멍이', '야옹이', '멍뭉이']
                          // ['멍멍이', '야옹이', '멍뭉이'] // names 를 몇번 반복해서 출력할건지 
    console.log(names[i]);   // 멍멍이 야옹이 멍뭉이    // 몇번을 반복할건데, names를 반복하는 그 몇번을 인덱스화해서 출력할건지
}


// names.length = 3
// i = 0    0 < 3  
//           true  -> 코드블럭 
//                 -> console.log(names[0]) : 멍멍이
//                 -> 증감식 i++ : 
//                       i = 1
// i = 1    1 < 3
//           true -> 코드블럭
//                -> console.log(names[1]) : 야옹이
//                -> 증감식 i++ :
//                      i = 2
//              ...
// i = 2     2 < 3
//           true -> 코드블럭
//                -> console.log(names[2]) : 멍뭉이
//                -> 증감식 i++ : 
//                      i = 3
// i = 3   3 < 3
//           false -> 반복문 종료
