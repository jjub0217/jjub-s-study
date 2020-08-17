/*  2. 프로퍼티 : 객체에서 값을 담고 있는 정보 
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

            const person = {
                name: '강주현',
                age: 33,
                gender: 'female'
            }
            console.log(person.gender); // female

            const james = {
                gender: 'male',
                color: 'white',
                company: 'fast-campus'
            }
            console.log(james.company); // fast-campus
