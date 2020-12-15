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

// < arrow function > : 화살표 함수
/*  1. 자신의 this를 만들지 않는다. 
        function Foo() {
            this.name = 'Mark';
        }
        // 익명함수를 변수에 대입해서 사용

    2. 생성자로 사용할수 없다.
        - this 를 만들지 않는데 어떻게 생성자로 쓸 수 있겠냐~?(그래서 new 연산자를 사용할수 없다)

    3. 항상 익명함수이다.
        - const test = ( ) => { } : 익명 화살표함수를 test 라는 변수에 할당하였다.

    4. 리턴만 있으면 { } 생략가능
        - const test = ( ) => false // <- 가능
        - x => y => z => a => b => c => false
        // └> x 의 리턴값(함수) : y => z => a => b => c => false
              y의 리턴값(함수) : z => a => b => c => false
              ...

    5. 인수가 하나면 { }  생략가능
        - const test = result => { }


// 1 레벨 깊이
const obj = { a: 3, b: 4, c: 5}
const cloned = { ...obj, a: 6}
cloned.c = 10;

console.log(obj, cloned); // { a: 3, b: 4, c: 5 } { a: 6, b: 4, c: 10 }

// 2 레벨 깊이
const obj1 = { a: { b: 100}}
const obj1cloned = {...obj1}
obj1cloned.a.b = 200;

console.log(obj1, obj1cloned); // { a: { b: 200 } } { a: { b: 200 } }*/
