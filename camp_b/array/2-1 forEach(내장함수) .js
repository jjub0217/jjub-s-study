// const numbers = [1, 2, 3];
// numbers.forEach(v => {
//     // console.log(v*2); 
//     // console.log([v*2]); 
//     console.log(v ** 2);
//     // console.log([v**2]); 
// });
// console.log(numbers); // 2 4 6 
// console.log(numbers); // [2] [4] [6] 
// console.log(numbers); // 1 4 9
// console.log(numbers); // [1] [4] [9]


// const numbers2 = [2, 4, 6];
// let array = [];

// numbers2.forEach(v => { // <- numbers2 라는 배열 내부에서, 해당 배열 요소들을 가지고 어떤 작업을 반복하는 함수 
//     array.push(v *2); // <- 그 '어떤 작업' 이 뭐냐면, array 라는 배열에 push 라는 배열 내장함수를 써서, array 라는 배열에 추가 삽입하는 함수
//                      // 뭘 추가 삽입할거냐면, numbers2 의 요소들을 2씩 곱한 결과값을 추가 삽입할거다.
// });

// console.log(array); // [ 4, 8, 12]  <- 추가 삽입한 결과물

////////////////////////////////////////////////////////////

const frontEnd = {
    people : 20,
    subject: 'javascript',
    male: 15,
    female: 5
}

const fastCampus = [ 1, frontEnd, {address: 'seongsu'} ];
// console.log(fastCampus); 
/*
[ 
    1, 
    {people: 20, subject: 'javascript', male: 15, female: 5},
    {address: 'seongsu'}
]
*/
let pows = [];
fastCampus.forEach(function(fastCam){
  pows.push(fastCam); 
}) 
console.log(pows);
