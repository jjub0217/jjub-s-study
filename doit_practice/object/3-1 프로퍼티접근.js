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
            const person = {
                name: '강주현',
                age: 33,
                gender: 'female',
                'current-company': 'fast-campus',
                'skin color': 'white',
                33: 'age' 
            }
            console.log(person.gender); // female
            console.log(person[33]); // age
            console.log(person['current-company']); // fast-campus
            console.log(person['skin color']); // white
            console.log(person.name); // 강주현

