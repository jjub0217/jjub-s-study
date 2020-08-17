// < 프로퍼티 키와 프로퍼티 값의 갱신 >

const animal = {
    name: '멍멍이',
    type: '개'
}

const nickname = animal.name;
console.log(nickname); // 멍멍이
// └> 우리가 animal.name 을 이제 nickname 이란 값으로 부르고 싶다


// ┌ 프로퍼티 키의 이름을 바꿔줄수도 있다. : 프로퍼티 키 갱신
// │ 좌변에는 원래 이름을 넣고, 우변에는 새로 짓고 싶은 이름 넣어서 밖으로 꺼내주면 된다. 
const { name: nickname } = animal;
console.log(nickname); // 멍멍이



animal.name = '야옹이'; // <- 프로퍼티 값 갱신
console.log(animal); // { name: '야옹이', type: '개' }
