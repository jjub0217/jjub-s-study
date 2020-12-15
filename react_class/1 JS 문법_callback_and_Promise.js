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

//  < callback 과 Promise 객체 >
/*      - callback : 과거 비동기 처리를 위한 선택 (비동기 처리를 위해서 어떤 로직을 하나 살펴보자) 
//                         ┌───────────────────────────┐
//                         ▼                           │
            function foo(call) {//                     │                    
                setTimeout(() => {//                   │
                    call();//                          │ (화살표 함수가 call 이란 매개변수에 할당되어 인수로 들어간다.)
                }, 1000)//                             │ foo 함수 실행 -> setTimeout 지나서 -> 화살표 함수 실행.
//                                                     │ : 화살표함수 = 콜백함수
            } //                                       │
//                                                     │
            foo(() => { console.log('end') }) // ──────┘ 

            console.log('이것이 먼저 실행'); // <- 전역에 위치하기 때문에 제일 먼저 실행

            - foo 함수 내부로 전달되는 콜백함수가, foo 함수 내부에 diff 가 깊어질수도 있다 : 콜백헬
            - 콜백헬을 해결하기 위해 나온 것이 Promise 객체이다. 

        - Promise 객체
            - Promise 객체를 만들고, 로직 처리 후 성공과 실패를 알려준다. 
            - then 과 catch 를 통해 메인 로직에 전달한다. 
            - new 연산자를 통해 Promise 객체를 만들면, 그 객체가 바로 어떤 상태에 빠지게 되는데, 
              그 상태가 지금 시작해서 진행중이야 라고 하는 상태이다. 
              그 상태가 성공하면, 성공이야! 실패하면 실패야.. 라고 알려주는 객체이다. 
              function foo(){
                return new Promise( (resolve2, reject) => { // <┐ 
                    setTimeout( () => { resolve2();//           │
                    }, 1000)//                                  │ new 연산자와 Promise 키워드를 사용하여, Promise 객체를 생성
                })//                                            │
            } // <──────────────────────────────────────────────┘

            // foo() 
            /* └>  여기까지만 하면, Promise 객체가 만들어져서 리턴됐을 뿐이다. 
                 ( Promise 객체가 생성된 직후. Promise 객체가 시작은 했으나, 아직 끝나지 않은 상태다. )*//*

            // 1번째 경우     
             foo().then( () => { console.log('end');}) 
            /* └> foo 함수를 호출하여, Promise객체가 생성 -> Promise 객체 내부에서 resolve2 함수가 setTimeout 에 의해서 
                  한번이라도 실행된 이후에 then 함수가 실행된다.
                  즉, Promise 객체가 생성되고, 1초 후에 resolve2 라는 함수가 실행된다는 뜻이다. *//*
            console.log('이것이 먼저 실행');
            
            // 2번째 경우
             foo().then( () => {
                 console.log('1');
                 return foo()})
             .then( () => {
             console.log('2');
             return foo()})
                 .then( () => {
                     console.log('3');
                 }) 
                    
            console.log('이것이 먼저 실행'); 
            // └> 콜백헬에서 벗어났다고 생각했지만 그게 아니었다. -> 이걸 해결하기 위해 async - await 가 나왔다. 
*/

















