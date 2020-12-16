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

//  < async - await >
/*      - ES7 에 나온 기능이다. 
        - 기본적으로 Promise 를 사용한다.
          그래서 비동기 로직 자체에 대해서는 Promise 와 다른게 전혀 없다. 
        - then 과 catch 를 사용해서 메인 로직에 바로 전달한다.
        - async 키워드가 붙은 함수 안에서만 await 키워드를 사용할수 있다.
        - 사용자 입장에서 편하고 쉬운 문법을 제공한다.  
        - ( async ) 
            - await 를 사용하기 위한 장식품 
            - await 를 사용하기 위한 공간(해당 함수 스코프에 async 가 달려있어야 한다.) 
        function foo(){
            return new Promise( (resolve2, reject) => { // <┐ 
                setTimeout( () => { resolve2();//           │
                }, 1000)//                                  │ new 연산자와 Promise 키워드를 사용하여, Promise 객체를 생성
            })//                                            │
        } // <──────────────────────────────────────────────┘
       
        //  ┌ async - await 안 썼을 때
            foo().then( () => { console.log('end');}) 
        //                 ↓
        //  ┌ async - await 쓴다면
            (async () => {
                await foo(); // <- foo 함수를 실행 ( 함수 호출문 앞에 await 를 쓴다. )
                /*  └>  바로 위 코드는 foo 함수내부의 resolve2 함수가 끝나기전까지 종료가 안된다. 
                        (즉, Promise 객체가 생성되고, 1초 후에 resolve2 함수가 종료되기 전까지 await foo(); 는 종료되지 않는다. ) *//*
                console.log('이것이 먼저 실행'); 
                console.log('end');
            })();
            // └> 시작하자마자 1초 후에 39번 줄 실행 -> 40번 줄 실행            */