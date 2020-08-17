// 5. 프로토타입 (기본 틀)
/*  - 인스턴스 : 프로토타입을 사용해서 만들어낸 것
    - 새 인스턴스를 생성할때 New 연산자를 사용해서 프로토타입으로 만든다. (프로토타입을 사용해서 인스턴스를 만들때 New 연산자를 사용해야 한다)
    - 인스턴스를 만들때 : new 연산자 뒤에 프로토타입 객체 이름과 괄호를 써주면 된다. 
        - 예시 */
            let now = new Date();
            console.log(now); // 2020-08-16T11:09:48.513Z
            console.log(typeof now);
//          => new 연산자를 사용해서 Date라는 프로토타입 객체를 사용하여 생성한 인스턴스 now. <- now 라는 변수에 객체가 담겨진다.
            now.toLocaleString(); //  2020. 8. 16. 오후 8:25:04

            console.log(Math.random()); // 0.*****
            console.log(Math.random()* 100 + 1); // **.*****
            console.log(Math.floor(Math.random()* 100 + 1)); // **

// 객체: 붕어빵 기계
// 프로토타입: 붕어빵 틀
// 인스턴스: 붕어빵

            