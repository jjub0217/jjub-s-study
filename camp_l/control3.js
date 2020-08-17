// 논리 연산자를 이용한 조건문 평가

if(true && true) {
    console.log('두개 모두 true 이면 전체 true');
}

if(true && false) {
    console.log('한개만 true 이면 전체 false');
}

if(false && true) {
    console.log('한개만 true 이면 전체 false');
}

if(false && false) {
    console.log('두개 모두 거짓이면 전체 false');
}


if(true || true){
    console.log('두개 모두 true 이면 전체 true');
}

if(true || false){
    console.log('한개만 true여도 전체 true');
}

if(false || true){
    console.log('한개만 true여도 전체 true');
}

if(false || false){
    console.log('두개 모두 false 이면 전체 false');
}

if(!true) {
    console.log('조건식이 false이면 거짓');   
}

if(!false) {
    console.log('조건식이 true 이면 참');
    
}

// 논리 연산자를 이용한 조건부 실행

let n = 5;
(n % 5 === 0 ) && console.log('5로 나누어 떨어질때만 실행');

let b = 6;
(b % 5 === 0 ) && console.log('b 5로 나누어 떨어질때만 실행');

a = 5;
a % 5=== 0 || console.log('a 5로 나누어 떨어지지 않을때만 실행');

c = 6;
c % 5 === 0 || console.log('c 5로 나누어 떨어지지 않을때만 실행');