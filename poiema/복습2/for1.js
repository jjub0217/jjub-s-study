var str = 'aaab'
console.log(str.length);

// 문자 a 의 개수를 구해라.
let count = 0
for(let i = 0; i < str.length; i++){
    if(str[i] === 'a'){
        count++
    }
}
console.log(count);