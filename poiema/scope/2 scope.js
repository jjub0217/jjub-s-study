// 매개변수도 식별자 이므로 스코프가 존재한다

let x = 'global';

function foo(){
  x = 'local';
  console.log(x);
}
foo();

console.log(x);