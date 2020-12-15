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

// < 함수.bind(this) >
/*      - 함수내부 안에 있는 this. 인수로 넣은 this 를 사용하는 함수를 만들어서 리턴한다.
        - bind 라고 하는 함수가 존재하는 것이다. 
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
*/
