/* 스코프
        - 변수나 함수를 선언할때 어디서 어디까지 유효한지 범위를 뜻한다.
        1. 전역 변수(Global 변수)
            - 코드의 모든 범위에서 사용이 가능한 변수
        2. 함수 변수
            - 특정 함수 내부에서만 사용이 가능한 변수
        3. 블록 레벨 변수
            - 코드 블록 내에서만 사용이 가능한 변수
*/

const value = 'hello'; // <- 전역 변수(Global 변수) : 다른 곳 어디에서든 사용할수 있다. 

function myFunction(){
    console.log('myFunction: ');
    console.log(value); // <- 전역 변수 
}

function otherFunction(){
    console.log('otherFunction: ');
    const value = 'bye!' // <- 함수 내부에서만 유효한 변수이다. (전역 변수에 영향을 주지 않는다)
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);

