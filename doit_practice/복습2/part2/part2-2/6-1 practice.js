// 생성자 함수를 사용해서 book 이란 객체를 만들어내라
// function Book(name, made, number){
//     this.title = name, 
//     this.author = made, 
//     this.page = number
// }

// const myBook = new Book('오답노트', 'china', 2)
// console.log(myBook);

// const yourBook = new Book('교환일기', 'korea', 3)
// console.log(yourBook);

// let sen = function(){
//     console.log(`당신은 ${this.subject} ${this.number}기, 평균나이 ${this.avAge}세에 속해있습니다. `);
// } <- sen 이란 함수 입장에서는 여기서 이렇게 함수를 선언하면 this 가 뭔지 모르기때문에 이 함수는 실행이 되지 않는다. 

function FastCam (subject, number, member, male, female, avAge){
    this.subject = subject,
    this.number = number,
    this.member = member,
    this.male = male,
    this.female = female,
    this.avAge = avAge,
    // this.sentence = sen <- 실행안되는 코드다. 
    this.sentence = function(){
            console.log(`당신은 ${this.subject} ${this.number}기, 평균나이 ${this.avAge}세에 속해있습니다. `);
        }
}


const fds16 = new FastCam('프론트엔드', 16, 15, 9, 6, 23)
const fds17 = new FastCam('프론트엔드', 17, 20, 15, 5, 25);
const bks2 = new FastCam('백엔드', 2, 10, 8, 2, 26)

console.log(fds16);
fds16.sentence();

console.log(fds17);
fds17.sentence();

console.log(bks2);
bks2.sentence();
