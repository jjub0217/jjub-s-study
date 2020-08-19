const doichang = ['임영서', '김동찬', '강주현', '박상언', '정세영', '원진솔'];

doichang.forEach(function(people){
  console.log(`${people}씨, 이름표 가지고 오세요` );
})
 
console.log('//////////////////////////////////////////////');

for(let i = 0; i < doichang.length; i++){
  console.log(`${doichang[i]}씨, 이름표 가지고 오세요`);
}