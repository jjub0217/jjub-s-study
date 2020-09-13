// 함수 : 특정코드를 하나의 명령으로 실행할수 있게 해준다. 
// 파라미터를 처리해서 결과를 만들수 있다.
// 파라미터 : 인풋값(넣는 값), 함수에서 받아오는 값
// 결과값 : 리턴 이라는 키워드를 사용한다.

// 특정값들의 합을 구해라 
const a = 1;
const b = 2;
const sum = add(a, b);

function add(x, y){
    return x + y;
}
console.log(sum);
console.log(add(a, b));


// 함수를 실행하면 헬로 이름을 출력해라

function hello(name){
    console.log(`${name}아, 안녕?`);
    return `${name}이는 남자친구가 있다.`
}
const print = hello('주현');
console.log(print);
// hello('주현')