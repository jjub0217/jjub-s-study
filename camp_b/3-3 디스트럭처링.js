// 비구조 할당(= 객체 구조 분해) : 객체의 특정 프로퍼티 값을 추출해준다.
//  - 특정값들을 객체에서 빼온다.

// object 라는 객체에 프로퍼티 키가 하나만 있어서
// 새로운 프로퍼티 키를 생성해서 값을 만들어주고 싶다면?

const object = {
    a: 1
}

function print({a, b}){
    console.log(a); // 1
    console.log(b); // undefined
}
print(object); 

////////////////////////////////////////////
// 방법 1 : 함수 파라미터에 기본 값을 지정해주는 방법

function print({a, b = 2}){
    console.log(a); // 1
    console.log(b); // 2
}
print(object); 


////////////////////////////////////////////
// 방법 2 : 비구조 할당으로 프로퍼티 키에 기본값을 할당

const {a, b = 2} = object;
console.log(a); // 1
console.log(b); // 2