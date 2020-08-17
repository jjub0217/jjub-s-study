let string = 'Hello World';
let search = 'l';
let count = 0;

for (let i = 0; i < string.length; i++) {
    // 문자열을 반복해서 한글자 한글자씩 들여다보는것이다.
    // 그러기 위해서 문자열인 string 이란 변수의 길이만큼 반복하면서 순회해야 한다.

    // string 은 유사배열 객체다.
    if (string[i] != search) continue;
    count++;
}
console.log(count);

// 3