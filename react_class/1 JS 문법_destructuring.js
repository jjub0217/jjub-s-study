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

//  < 디스트럭처링 할당 >
/*  - 구조 분해 할당
    - 배열과 객체에서 사용가능하다.
        1. 객체 디스트럭처링 */

        // 1번 방법
        const idol = {
            name: '이준호',
            age: 31
        }

        // const name = idol.name;
        // const age = idol.age;
        // console.log(name, age); // 이준호 31

        // 2번 방법
        // const {name, age} = idol;
        // console.log(name, age); // 이준호 31

        // 3번 방법
        // const {name, age} = { 
        //     name: '이준호',
        //     age: 31
        // }
        // console.log(name, age); // 이준호 31

        // 4번 방법
        const { name: named, age: aged } = {
            name: '이준호',
            age: 31
        }
        console.log(named, aged); // 이준호 31
        
        // 2. 배열 디스트럭처링 
        const [name, age] = [ '이준호', 31 ]
        console.log(name, age); // 이준호 31 


        