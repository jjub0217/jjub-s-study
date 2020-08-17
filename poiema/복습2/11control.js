// 다음을 참고하여 *(별)로 높이가 5인 (var line = 5) 삼각형을 문자열로 완성하라.
// 개행문자('\n')을 사용하여 개행한다.
// 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

for(let i=1; i<=5 ;i++){
    for(let j=0; j<i; j++){
        process.stdout.write('*')
    }
    process.stdout.write('\n');
}


let star = '';
for (let i = 0; i <= 5 ; i++) {
  for (var j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);