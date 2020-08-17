/*  
< 객체 > : number, string 등 여러가지 자료형이 포함되어있는 '복합 자료형' .
    - 예시 )*/ 
        const book = {
            title(제목) : '자바스크립트',
            author(저자) : '홍길동',
            page(쪽수) : 500,
            price(가격) : 15000
        } 
/*    
    1. 객체 모델
        a. DOM (문서 객체 모델)
            - 객체를 사용해서 웹 문서를 관리하는 방식
            - Documents 객체, Image 객체 등...
        b. BOM (브라우저 정보를 객체로 다루는 방식)
            - Navigator 객체: 사용중인 브라우저 종류나 버전 정보을 담고 있음
                - 예시: 
                1. navigator.vendor // Google Inc. 
                        ￣￣￣￣└ vendor : navigator 객체에 내장되어있는 속성 : 브라우저의 종류나 버전 정보
                2. navigator.onLine // true 
                            ￣￣￣￣└ onLine : navigator 객체에 내장되어있는 속성 : 현재 인터넷이 연결되어있는지의 여부 정보
            - History 객체
            - Location 객체
            - Screen 객체 등...
    2. 프로퍼티 : 객체에서 값을 담고 있는 정보 
        a. 프로퍼티 키
            - 객체의 속성을 정보를 나타내는 이름(key)
            - 객체의 속성 값을 가져올때는 프로퍼티 키를 사용한 '마침표 표기법'으로 프로퍼티 키에 접근해야 한다.
        b. 프로퍼티 값
            - 객체의 속성 값
        c. 예시         */
            const dog = {
                name: '멍뭉이', 
                //=> name = 프로퍼티 키     
                //  '멍뭉이' = 프로퍼티 값
                age: 2
            }
            console.log(dog.name); // '멍뭉이 <- 마침표 표기법 
/*  3. 프로퍼티 접근
        a. 마침표 표기법
            - 예시:*/
            const animal ={
                name: 'dog',
                'female-child' : 2,
                'male child' : 3,
                10 : 5
            }
            console.log(animal.name); // dog <- 마침표 표기법
//      b. 대괄호 표기법
            console.log(animal['female-child']); // 2 <- 대괄호 표기법
            console.log(animal['male child']);  // 3 <- 대괄호 표기법
            console.log(animal[10]);  // 5 <- 대괄호 표기법
            console.log(animal['10']);  // 5 <- 대괄호 표기법
/*          - 프로퍼티 키는 반드시 '' 로 감싼 문자열을 대괄호로 감싸야 한다.
            - 식별자 네이밍 규칙을 지키지 않은 경우에 사용해야 한다.
            - 프로퍼티 키가 숫자일 경우에 '' 을 생략할 수 있다. (생략을 안해도 된다. 왜냐면, JS엔진이 내부적으로 
                                                            문자열로 변환시키기 때문이다)*/
/*  4. 메서드
        -객체가 어떻게 동작할지 선언을 해놓는 함수
        - 객체 안에서 정의된 함수 : 객체의 메서드인 프로퍼티 키에 접근(호출)하면 해당 함수인 메서드가 불러와진다.
            - 예시*/
                const dog = {
                    name: '멍뭉이',
                    say: function said(){
                        console.log('멍멍');
                    }
                }
                dog.say(); // 멍멍

                const person = {
                    name: '강주현',
                    age: 33,
                    gender: 'female',
                    current: function company(){
                        console.log(`${person.name}씨는 현재 ${person.company} 소속 직원입니다.`);
                    },
                    company: 'fast-campus',
                    'skin color': 'white',
                    33: 'age',

                }
                person.current(); // 강주현씨는 현재 fast-campus 소속 직원입니다.
                person['current'](); // 강주현씨는 현재 fast-campus 소속 직원입니다.
// 5. 프로토타입 (기본 틀)
/*      - 인스턴스 : 프로토타입을 사용해서 만들어낸 것
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
