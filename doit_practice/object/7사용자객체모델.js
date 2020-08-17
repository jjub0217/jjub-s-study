// 객체를 만드는 방법(객체 생성 방법)
/*  1. 리터럴 표기법
        - 리터럴(자료를 표기하는 방식)
            a. 원시타입 리터럴(변경 불가능:immutable)
                - number : 정수 / 부동소수점 / 2진수 / 8진수 / 16진수
                - string
                - boolean
                - null
                - undefined
            b. 객체타입 리터럴(변경 가능:mutable)
                - 객체
                - 배열
                -정규표현식
                - 함수
        - 예시*/
        const book = {
            title: '자바스크립트',
            author: '강주현',
            pages: 500,
            price: 15000,
            info: function(){
                // console.log(this.title + '책의 분량은' + this.pages+ '쪽입니다.');
                // 자바스크립트책의 분량은500쪽입니다. -------------------------------┐
                console.log(`${this.title} 책의 분량은 ${this.pages}쪽입니다.`);//    │-------┐
                // 자바스크립트 책의 분량은 500쪽입니다-------------------------------┘        │
            }//                                                                              │
        }//                                                                                  │                                             
        console.log(book.title);// 자바스크립트                                               │ 
        book.info(); // ---------------------------------------------------------------------┘
/*  2. Object 생성자 함수
    3. 생성자 함수
    4. Object.create
    5. 클래스
*/
