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
9. Generator 객체
*/

//  < Generator 객체 >
/*      - 리액트를 배우고, 리덕스를 배운다음에 리덕스사가 라는것을 배우는데, 리덕스사가의 베이스 기술이다.
        -   리덕스 : 라이브러리 ────────┐
            리덕스사가 : 라이브러리 ────┴─── 문법 : 제너레이터
        - function* 으로 만들어진 함수를 호출하면, 그 호출의 결과물을 말한다.
        - function* 함수 내부에 yield 라고 하는 키워드를 사용하여 호출하여, 다시 제어권을 넘겨준다.
        - 제너레이터 객체에 next() 함수를 호출하면, 다음 yield 지점까지 간다.

        // 1번째 경우
        function* generator() {
            yield 1; // yield 할때마다 어떤 일이 발생하는데, 제너레이터 객체의 next 를 호출하면 그 다음줄로 이동한다. 
            yield 2;

        }
        const obj = generator();
        console.log(obj.next().value); // 1
        console.log(obj.next().value); // 2

        // 2번째 경우
        function* generator() {
            console.log(0.5);
            yield 1; 
            console.log(1.5);
            yield 2;
            console.log(2.5);
            yield 3;
            console.log(3.5);

        }
        const obj = generator();
        console.log(obj.next().value); // 1
        console.log(obj.next().value); // 2
        console.log(obj.next().value); // 3
        console.log(obj.next().value); // undefined
        console.log(obj.next().value); // undefined

        // 3번째 경우*/

        /*자동차게임의 핸들을 사용자1과 사용자2가 서로 주고받으면서 게임안에서 운전을 한다면
         사용자들간에는 서로 핸들을 넘겨주고 앞으로 진행하는거겠지만
         하나님의 관점에서는, 핸들을 누가 가지고 있느냐에 따라서 게임이 진행되는 것이다. 

                    ┌ 자동차게임에 있는 핸들 
                    │    : baz 라고 하는, 제너레이터를 생성하는 함수를 호출해서, 핸들을 얻어낼것이다.
                    │     (75번 줄에 있는 코드 " handle = baz(); ")
       ┌ 1. */ let handle = null;/*
       │
       │
       │     // 비동기 함수
       │     */function bar() {/* <──────────────────────────────────────────────────┐            
       │     */    setTimeout(() => {/*                                              │
       │     */        handle.next('hello')/*                                        │
       │     */    }, 1000)/*                                                        │
       │     */}/* // <- setTimeout 을 통해서 1초 후에, handle 을 next로 가게 하겠다.  │   
       │     // 바로 위 코드인 비동기 함수를 제너레이터를 통해 쓰게 된다면              │
       │                           │                                                 │
       │                           ↓                                                 │
       │     // ┌ 핸들을 통해 컨트롤을 넘기는 제너레이터를 생성하는 함수                │
       │     */function* baz () {/*                                                  │
    ┌──┼────────>*/const text = yield bar();/* ──────────────────────────────────────┘
    │  │         */console.log(text);/*
    │  │     */}/*
    │  │ 
    │  └──>/* 2. */handle = baz(); // <- 제너레이터를 생성하는 함수를 호출하여 얻어낸 결과물을 handle 에 담겠다. /*
/*  │         ↓              
    └──────── 3. */handle.next(); // <- 비동기 시작. 이 코드를 실행하면 73번 줄로 간다.


 
























// 3시간 7시간  월요일 수업꺼 -> 화요일
// 12시 ~    7시간 화요일 수업꺼 -> 수요일
// 12시 ~ 7시간 수요일 수업꺼 -> 목요일 
// 12시 ~ 6시간 목요일 수업꺼 -> 금요일
// 12시 ~ 7시간 금요일 수업꺼 -> 토요일
// 12시 ~ 7시간 월요일 수업꺼 -> 일요일
// 12시 ~ 6시간 화요일 수업꺼 -> 월요일
