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

//  < 함수.bind(this) >
/*      - 함수 안에서 실행되는 this 라는 키워드를, 인수로 들어온 this로 대체할수 있는 것이다. 
        - 우리가 함수를 만들면, 그 함수는 .bind 라는 함수를 호출할수 있다. 
        - 함수를 만들어서 bind(this)를 처리해서 어느곳에서든지 이 함수를 다른 this에 매칭시켜서 사용할수 있다. 
        - 함수를 만들면, 함수의 프로토타입 체인으로 call, apply, bind 라는 함수가 내장되어있는 것이다. 
            - 프로토타입 체인안에서 call, apply, bind 를 JS엔진이 찾으려고 할것이다. 
                : 이 안에 call 있니? 거기에는 있니? -> Function.prototype 에 call 있으니까 사용이 가능한것이다. 
                    - bind : 함수를 생성해서 리턴받는것
                    - call : 함수 호출 (인수목록)
                    - apply : 함수 호출 (인수목록) 
            function hello(){
                console.log(`안녕하세요 ${this.name}`);
            } // <- 함수는 .bind 라는 함수를 호출할수 있다. 

            const mark = { // ----┐
                name: 'Mark'//    │ ────────────────┐
            } // -----------------┘                 │
            const helloMark = hello.bind(mark); //  │ // <- hello 함수안에 쓰인 this에 mark 라는 객체를 binding 하겠다. 
//                                       ￣￣▲      │       hello 함수안의 this = mark 라는 객체
//                                           └──────┘       hello.bind(mark) 의 결과물은 함수다. 
            
            const anna = { // ----┐
                name: 'Anna'//    │ ────────────────┐
            } // -----------------┘                 │
            const helloAnna = hello.bind(anna); //  │ // <- hello 함수안에 쓰인 this에 anna 라는 객체를 binding 하겠다. 
            //                                       ￣￣▲      │       hello 함수안의 this = anna 라는 객체
            //                                           └──────┘       hello.bind(anna) 의 결과물은 함수다.             

            helloMark();            
            helloAnna(); */ 