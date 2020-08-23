const season = ['봄','여름','가을','겨울'];
const length = season.length;
// console.log(length); // 4 

for(let i = 0; i < season.length; i++){
    console.log(season[i]); // 봄 여름 가을 겨울
}
// 0 , 0 < 4 , 봄
// 1 , 1 < 4 , 여름
// 2, 2 < 4 , 가을
// 3, 3 < 4 , 겨울
// 4, 4 < 4 , false 

// triple = [3, 6, 9] 배열이 있을 때 triple 의 모든 값을 콘솔 창에 표시하는 소스를 작성하시오

triple = [3, 6, 9];
for(let i = 0; i < triple.length; i++){
    console.log(triple[i]);
}

let nums = ['1', '2', '3'];
let chars = ['a', 'b', 'c', 'd'];

console.log(nums.concat(chars));
// [ '1', '2', '3', 'a', 'b', 'c', 'd' ]
console.log(chars.concat(nums));
// [ 'a', 'b', 'c', 'd', '1', '2', '3' ]
console.log(nums); // ['1', '2', '3']
console.log(chars); // ['a', 'b', 'c', 'd']