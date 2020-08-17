// 비구조 할당(= 객체 구조 분해) : 객체의 특정 프로퍼티 값을 추출해준다.
//  - 특정값들을 객체에서 빼온다.

// object 라는 객체에 프로퍼티 키가 하나만 있어서
// 새로운 프로퍼티 키를 생성해서 값을 만들어주고 싶다면?


////////////////////////////////////////////
// 방법 1 : 함수 파라미터에 기본 값을 지정해주는 방법
const nick = ['이쁜이', '애기', '이쁘니', '세지니'];

const boyFriend = {
    name : '오세진',
    nickName : nick
}

function love({name, age = 33, nickName}){
    const text = `${name}(${age})씨는 별명으로 ${nickName} 등을 갖고 있습니다.`
    console.log(text); 
}
love(boyFriend); // 오세진(33)씨는 별명으로 이쁜이,애기,이쁘니,세지니 등을 갖고 있습니다.


////////////////////////////////////////////
// 방법 2 : 비구조 할당으로 프로퍼티 키에 기본값을 할당

const {name, age = 33, nickName} = boyFriend;
const text = `${name}(${age})씨는 별명으로 ${nickName} 등을 갖고 있습니다.`

console.log(text); // 오세진(33)씨는 별명으로 이쁜이,애기,이쁘니,세지니 등을 갖고 있습니다.
