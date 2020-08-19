const doichang = ['임영서', '김동찬', '강주현', '박상언', '정세영', '원진솔'];
// const pows = [];

for(let i = 0 ; i < doichang.length; i++){
  console.log(doichang[i] + '씨');
}

// 방법1
// doichang.forEach(function (people) {
//   pows.push(people + '씨');
// }) 
// console.log(pows);

// // 방법2
// doichang.forEach(people => 
//   pows.push(people + '씨')
// )
// console.log(pows);

// 방법3
// function sir(people){
//   pows.push(people + '씨')
// }
// doichang.forEach(sir);
// console.log(pows);
