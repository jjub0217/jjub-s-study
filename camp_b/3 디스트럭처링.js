// 비구조 할당(= 객체 구조 분해) : 객체의 특정 프로퍼티 값을 추출해준다.
//  - 특정값들을 객체에서 빼온다.

const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

function print(hero){
    const {name, actor, alias} = hero; // <- 어디에서 어떤 값을 추출하고 싶은지 정의해줘야 한다.
    // 이 코드에서는 ironMan 이라는 객체에서 name, actor, alias 라는 프로퍼티 키를 추출하고 싶어서 
    // hero 라는 객체를 추출하고 싶은 프로퍼티 키들을 {} 안에 넣어놓은것에 할당을 한것이다. <- 무슨말이지???? 

    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`
    console.log(text);  // 아이언맨(토니 스타크)역할을 맡은 배우는 로버트 다우니 주니어입니다.
}
print(ironMan);

// 아래 코드도 질문하기!!

function print({name, actor, alias}){
    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`
    console.log(text);  // 아이언맨(토니 스타크)역할을 맡은 배우는 로버트 다우니 주니어입니다.
}
print(ironMan);
 

///////////////////////////////////////////////////////////////////////


const nick = ['이쁜이', '애기', '이쁘니', '세지니']

const boyFriend = {
    name : '오세진',
    age : 33,
    nickName : nick
}

function love(person){
    const {name, age, nickName} = person; // <- 어디에서 어떤 값을 추출하고 싶은지 정의해줘야 한다.
    const text = `${name}(${age})씨는 별명으로 ${nickName} 등을 갖고 있습니다.`
    console.log(text); 
}
love(boyFriend); // 오세진(33)씨는 별명으로 이쁜이,애기,이쁘니,세지니 등을 갖고 있습니다.



function love({name, age, nickName}){
    const text = `${name}(${age})씨는 별명으로 ${nickName} 등을 갖고 있습니다.`
    console.log(text); 
}
love(boyFriend);  // 오세진(33)씨는 별명으로 이쁜이,애기,이쁘니,세지니 등을 갖고 있습니다.