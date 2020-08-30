/* 객체를 생성하는 방법
        ┌-----> 1. 객체 리터럴
        │       2. 생성자 함수
        │       3. Object 생성자함수
        │       4. Object.creat 메서드
        │       5. 클래스
        │                                */
// 객체 리터럴
const object = {
        name: '강주현',
        age: 33,
        sayHi(){
                console.log('Hello');
        }
}
// { name: '강주현', age: 33 } <- 객체 리러럴
// name , age <- 프로퍼티 키
// '강주현' , 33 <- 프로퍼티 값 
// sayHi(){ console.log('Hello'); } <- 메서드

const book ={ 
        title: '자바스크립트',
        author: '홍길동',
        page: 500,
        price: 15000,
        info: function(){
                console.log(`${this.title} 책의 분량은 ${this.page}쪽입니다.`)
        }
}
book.info(); // 자바스크립트 책의 분량은 500쪽입니다.

book.field = "IT"
console.log(book.field);
// IT
console.log(book);
/*{
        title: '자바스크립트',
        author: '홍길동',
        page: 500,
        price: 15000,
        info: [Function: info],
        field: 'IT'
      }
*/
delete book.page;
console.log(book);
/*
{
  title: '자바스크립트',
  author: '홍길동',
  price: 15000,
  info: [Function: info],
  field: 'IT'
}
*/
