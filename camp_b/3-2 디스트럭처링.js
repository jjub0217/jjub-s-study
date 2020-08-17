// 비구조 할당(= 객체 구조 분해) : 객체의 특정 프로퍼티 값을 추출해준다.
//  - 특정값들을 객체에서 빼온다.

const object = {
    a: 1,
    b: 2
}

const {a, b} = object; //<- 여기서 우변에는 객체이어야 한다.  <- a 랑 b 값을 밖으로 꺼내주기 위함
// 할당 기준은 프로퍼티 키여야 한다. 
// 이때 { } 안에 들어가는 변수 와, 프로퍼티 키가 일치하여야 한다. 
// object 라는 객체가 할당이 되는데, 할당된 object 라는 객체에서 
// a랑 b 라는 프로퍼티 키들의 값들이 추출되서
// a 와 b 에 할당이 된다. 

console.log(a); // 1
console.log(b); // 2


function print({a, b}){
    console.log(a); // 1
    console.log(b); // 2
}
print(object); // object 라는 객체가 인수에 들어가서 
// 파라미터로 전달 되는데, 전달되면서 object 라는 객체의 
// 결국 a 와 b 라는 프로퍼티들의 값들이 파라미터로 전달이 된다.

////////////////////////////////////////////////

const nick = ['이쁜이', '애기', '이쁘니', '세지니'];
const boyFriend = {
    name : '오세진',
    age : 33,
    nickName : nick
}

function love({name, age, nickName}){
    const text = `${name}(${age})씨는 별명으로 ${nickName} 등을 갖고 있습니다.`
    console.log(text); 
}
love(boyFriend); // 오세진(33)씨는 별명으로 이쁜이,애기,이쁘니,세지니 등을 갖고 있습니다.
