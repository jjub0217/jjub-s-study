// 생성자 함수(객체를 생성하는 방법)
//  - 개별개별의 객체들을 선언하는 방법이 아니라, 
//    프로토타입(틀)을 만들어 두고, 그 프로토타입을 사용하여 생성하는 인스턴스를 복제해서 재사용
//  - 객체를 만들어내는 함수.
//  - function 예약어와, this 예약어 다음에 마침표 표기법을 사용해서 프로퍼티에 접근해야 한다.
//  - 예시
    function Book(title,author, pages, price){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.price = price
    }
    let html = new Book('자바스크립트', '홍길동', 500, 34000);
    let youtube = new Book('유투브 영상 만들기', '강주현', 300, 29000)
    let python = new Book('점프 투 파아썬', '오세진', 200, 39000)
    // console.log(html);
    // Book { title: '자바스크립트', author: '홍길동', pages: 500, price: 34000 }
    // console.log(youtube);
    // Book { title: '유투브 영상 만들기', author: '강주현', pages: 300, price: 29000 }
    // console.log(python);
    // Book { title: '점프 투 파아썬', author: '오세진', pages: 200, price: 39000 }
    let bookList = [html, youtube, python];
    console.log(bookList);
    /* [ 
         Book { 
            title: '자바스크립트', 
            author: '홍길동', 
            pages: 500, 
            price: 34000 
                },
        Book { 
            title: '유투브 영상 만들기', 
            author: '강주현', 
            pages: 300, 
            price: 29000 
                },
        Book { 
            title: '점프 투 파아썬', 
            author: '오세진', 
            pages: 200, 
            price: 39000 
                }
        ]*/

        let author = [html.author, youtube.author, python.author];
        console.log(author); // [ 홍길동, 강주현, 오세진]    
        console.log(author[0]); // 홍길동
        
    console.log(bookList[0]); // Book { title: '자바스크립트', author: '홍길동', pages: 500, price: 34000 }
    console.log(bookList[0].title); // 자바스크립트

for(let i = 0; i < bookList.length; i++){
    console.log(bookList[i].title);
} 
/* 자바스크립트
   유투브 영상 만들기
   점프 투 파이썬
*/
   






    //  function Fds17(people, male, female, subject){
    //      this.people = people;
    //      this.male = male;
    //      this.female = female;
    //      this.subject = subject
    //   }

    //   let facam = new Fds17(20, 10, 5, 'front-end');
    //   console.log(facam);