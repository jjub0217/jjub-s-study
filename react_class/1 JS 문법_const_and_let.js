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

// < const let >
/*  1. var 는 문제아. (ES5 까지 변수를 선언할때 사용하는 키워드) 왜일까? 
        - 함수 레벨 스코프(범위)라서 헷갈린다. 
                   ￣￣￣│
                         └> 유효범위를 말한다. : 어떤 범위에서 이 변수가 유효한가를 의미할때를 말한다. 
                            (유효 스코프 / 유효범위 )
        (function () {
            if (true) { // <-------------------┐
                var variable = '함수 스코프'//  ├-- if 조건문 사이에, var 라는 키워드를 사용하여 변수를 선언하였다.
            } // <-----------------------------┘ 
            console.log(variable);
        })(); // '함수 스코프' : 함수영역이 var의 유효범위(스코프)이다. 
                            
        - 중복 선언이 가능
        (function () {
            var variable = '함수 스코프'
            var variable = '중복'
            console.log(variable);
        })(); // '중복' : 값이 덮어진다. 

        - 생략도 가능 : 생략을 하게 되면, 해당 변수는 전역변수가 된다. 
        (function () {
            variable= 'no var' // <------------┐ 글로벌에 variable 라는 변수를 만든거나 다름없다.
            console.log(variable); // no var --┘  
        })();
        console.log(variable); // no var  

        - 호이스팅이 발생한다.
        (function(){ //  ----------------------------┐                //   (function(){       
            console.log(variable); // undefined      │                //        var variable;
            var variable = '호이스팅' //              ├------->>  =    //        console.log(variable); 
        })(); //  -----------------------------------┘                //        variable = '호이스팅'
                                                                    //  })(); // undefined
            - 함수가 100개 정도 되서, 쩌어 밑에 있는 함수더라도 위에서 사용하고 싶을때 JS가 선언만 모두 위로 올리는 걸 호이스팅이라 한다.


    2.  let 은 해결사. (ES6 에서 나온 변수선언 키워드) : var 를 써서 발생했던 문제들을 해결해준다.
        - 블록 레벨 스코프를 사용하여, 함수레벨 스코프의 문제점을 해결
        {
            let variable = '블록레벨 스코프'
            console.log(variable); // '블록레벨 스코프'
        } 
        // <- 블록레벨 스코프 : let 키워드를 사용하여 선언한 변수인, variable 은 { } 안에서만 유효하게 되었다. 
              { } 밖에서는 유효하지 않다.  
        
        - 중복선언하면 syntaxError(문법에러) 가 나게끔 하여, 중복선언의 문제점을 해결
         {
            let variable = '블록레벨 스코프'
            let variable = '중복'

            console.log(variable); // SyntaxError : 'variable' has already been declared
        } 
        
        - 호이스팅되면 referenceError(참조에러) 가 나게끔 하여, 호이스팅의 문제점을 해결
         {
            console.log(variable); // ReferenceError 
            let variable = '호이스팅'
        }
        
                                    /*( Error 발생 ) 
                                    - JS에서 Error 를 발생시킬때, 에러 객체를 생성시킨다. 
                                    - 객체 어케 만들어? 
                                    1. new 써서 인스턴스 생성
                                    throw new Error(); // Error : Error 객체를 생성해서 던진다. (이게 에러를 발생시키는 것이다.) 
                                    throw new SyntaxError(); // SyntaxError 
                                    throw new ReferenceError(); // ReferenceError

                                    2. class 써서 객체 생성
                                    - class SyntaxError extends Error {

                                    } // <- JS 내장 Error 타입 : Error 라고 하는 기본 내장객체에다가 동작을 조금 더 추가하여, 
                                            중복선언한 것을 JS엔진이 보면, JS엔진이 개발자들에게 신텍스에러 를 던진다.
                                            신택스에러라고 하는 에러는 이건 ~ 한 이유로 신텍스에러가 발생했다는 의미이다.
                                            생성해서 던진다.

                                    - 개발자가 에러를 직접 만들수도 있다. 
                                        - class UnauthorizedError extends Error {
                                        
                                        } // <- Error 타입을 직접 만들어서 던질수도 있다. 
                                                허가되지 않은 사용자가 나오면 Error 를 생성해서 던진다.


    3. let 은 변경가능, const 변경 불가능
        - 원시타입의 값(Primitive : 변경불가능한 값)
            1.
            let a = '문자열'
            a = '문자열 교체'
            console.log(a) // 문자열 교체

            2.
            const a = '문자열'
            a = '문자열 교체'
            console.log(a); // TypeError

        - 객체타입의 값(Reference : 변경가능한 값)
            1.
            let e = {
                foo: 'foo'
            } // <- e 에는, 객체리터럴이 담긴 메모리주소가 담겨있다. 
                    (즉, e 에는 객체리터럴의 참조값이 담겨있으며, 해당 참조값을 e 가 가리키고 있다. )
            e = {
                bar: 'bar'
            } // <- e 의 참조값을 변경했다.

            console.log(e); // 참조값이 변경 됨 { bar: 'bar' }

            2. 
            const f = {
                foo: 'foo'
            }

            < f 의 참조값을 변경할수 있는 방법>
            1.
            f = {
                 foo: 'bar'
             } // TypeError : 실패 <- 값이 변경되지 못함

            2. 
            f.foo = 'bar';
            console.log(f); // { foo: 'bar' } : 성공 // <-f 라는 변수가 가리키고 있는 foo 라는 프로퍼티를 참조하면 값이 변경됨 
            // └> 그런데, 이렇게 하면 추적이 어렵기 때문에 요즘 잘 사용하지 않는다. 
                  교체하려면 새로 만든 객체로 교체하는 방법을 요즘 사용하는 추세이다. 
                  또한, 변경이 되었다는 것을 알려면 전수조사를 해야 하는데, 전수조사가 힘드니, 이때 사용하는 방법이
                  immutable(불변) 방법을 사용하는 것이다. 
                  ￣￣￣￣￣￣￣￣│
                                 └> 한번 만들어진 객체는 변하지 않게끔, 
// 3시간 * 4 = 12시간 ( 2시간40분 * 4 = 160분 * 4 = 640분 = 10시간(600분) 40분 
// 오늘 5시간 // 내일 5시간*/