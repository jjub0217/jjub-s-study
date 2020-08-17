// if문



const a = 1;
// if (a + 1 === 2) {
//     console.log('a + 1 이 2입니다.'); 
//     // a 라는 값이 a를 더해서 2 가 나오는게 아니게 되는 값이라면
//     // 위의 콘솔로그 함수는 무시되서 실행되지 않는다.
// }
if (a + 1 === 2) {
  const a = 2;
  console.log(`if문 안의 a 값은 ${a}`);
}
console.log(`if문 밖의 a 값은 ${a}`);
