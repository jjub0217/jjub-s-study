// 시작 인덱스와 끝 인덱스를 지정해서 그 사이의 요소를 꺼내는 함수
// 매개변수 1개일 경우 : 해당 인덱스부터 끝 요소까지 복사하여 반환
//         2개일 경우 : 해당 인덱스부터 해당 끝 요소 이전 요소까지 복사 반환
// 원본 배경을 변경되지 않는다. 

let color = ['red','green','blue','white','black']
// let add = color.slice(2); // <- 2번째 인덱스 요소부터 끝까지 복사하여 반환
// console.log(add); // [ 'blue', 'white', 'black' ] 
// console.log(color); // ['red','green','blue','white','black']

let add2 = color.slice(1, 4); // <- 1번째 인덱스부터 4번째 인덱스 이전의 
                              // 3번째 인덱스까지 복사하여 반환
console.log(add2); // [ 'green', 'blue', 'white' ]
console.log(color); // ['red','green','blue','white','black']

// color 배열에서 'blue' 와 'white' 만 추출하려면 slice 함수를 
// 어떻게 지정해야 하나요?

let add3 = color.slice(2,4);
console.log(add3); // [ 'blue', 'white' ]