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

//  < 스프레드 연산과 REST 파라미터 >
/*      - ...   이란 것을 사용한다.
        - 배열과 객체에서 사용할수 있다.
        1. 스프레드 연산자
            - 배열 : 1레벨 깊이의 값을 하나하나 꺼내서 복사할수 있다.
              객체 : 객체의 첫번째 최상위 프로퍼티를 꺼내서 복사할 수 있다.

            // 경우 1 
            function sum(a, b, c){
                return a + b + c;
            } 
            
            // 1번째 방법
            console.log(sum(12, 4, 55)); // 71
            
            // 2번째 방법
            const numbers = [ 12, 4, 55]
            console.log(sum(...numbers)); // 71
                

            //  경우 2 
            //    - 1 레벨 깊이 복사
            const obj = { a: 3, b: 4, c: 5 }
            const cloned = { 
                ...obj, // obj 의 중괄호가 벗겨진게 그대로 복사된다.
                a: 6
            }
            console.log(obj.a === cloned.b); // false (참조값이 다르다)
            console.log(cloned); // { a: 6, b: 4, c: 5 }   

            cloned.c = 10;

            console.log(obj, cloned); 
            // └> { a: 3, b: 4, c: 5 }, { a: 6, b: 4, c: 10 }
        
            //    - 2 레벨 깊이
            // 1번째 방법
            const obj1 = { 
                a: { 
                    b: 100 
                } 
            }
            const obj1cloned = {...obj1}
            console.log(obj1cloned); // { a: { b: 100 } }
            obj1cloned.a.b = 200;

            console.log(obj1, obj1cloned); // { a: { b: 200 } } { a: { b: 200 } }

            // 2번째 방법
            const obj2 = { 
                a: { 
                    b: 100 
                } 
            }
            const obj2cloned = {...obj2, a: {...obj2.a}}
            console.log(obj2cloned); // { a: { b: 100 } }
            obj2cloned.a.b = 200;

            console.log(obj2, obj2cloned); // { a: { b: 200 } } { a: { b: 200 } }


        2. REST 파라미터
            - 인수로 들어온 값을 배열로 변환한다. 
        // 경우1
        function rest1 (...a) {
            console.log(a);
        }
        rest1('mark', 37, 'korea' ) // [ 'mark', 37, 'korea' ]


        // 경우2
        function rest2 (name, ...a) {
            console.log(name, a);
        }
        rest2('mark', 37, 'korea') // mark [ 37, 'korea' ]
*/