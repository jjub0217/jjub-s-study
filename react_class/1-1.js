//리액트를 위한 JS의 문법정리
/*
1. const let
2. template string (템플릿 리터럴 )
3. arrow function ( 화살표 함수 )
4. .bind(this)
5. const {children} = this.props; ( 디스트럭처링 )
6. ...props (REST)
7. Promise
8. async await
9. Generator
*/

// < template string >
/*  1. 문자열
    2. `${JS 의 표현식}
        - sentence 와 expression 의 차이는? : return 있으면 문장. 없으면 표현식
        - 표현식으로 들어갈수 없는 것 : if문, for문 
        - 문장안에 표현식이 포함된다. (포함되지 않는 것 : if문, for문)
            - 템플릿 리터럴에 if문을 사용하려면 삼항조건연산자를 사용하면 된다. 
*/

// < arrow function > : 화살표 함수
/*  1. 자신의 this를 만들지 않는다. 
        function Foo() {
            this.name = 'Mark';
        }
        // 익명함수를 변수에 대입해서 사용

// 2. 생성자로 사용할수 엇다. 
// 3. 항상 익명함수이다.
// 4. 리턴이 바로 표현 가능하면 { return } 생략가능
// 5. 인수가 하나면 { }  생략가능

// 1 레벨 깊이
const obj = { a: 3, b: 4, c: 5}
const cloned = { ...obj, a: 6}
cloned.c = 10;

console.log(obj, cloned); // { a: 3, b: 4, c: 5 } { a: 6, b: 4, c: 10 }

// 2 레벨 깊이
const obj1 = { a: { b: 100}}
const obj1cloned = {...obj1}
obj1cloned.a.b = 200;

console.log(obj1, obj1cloned); // { a: { b: 200 } } { a: { b: 200 } }