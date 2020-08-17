// < 메서드 >
/*  -객체가 어떻게 동작할지 선언을 해놓는 함수
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




