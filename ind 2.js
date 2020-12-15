const p = 1; // <--┐
const c = p; // <--┘ p 값을 복사했다. <- 값에 의한 전달( pass by value)



const boyFriend = {
    name: '준호',
    age: 30
};
// 위 코드를 카피 하고 싶다면?






// console.log(Object.getOwnPropertyDescriptor(boyFriend, 'name'))
// console.log(Object.getOwnPropertyDescriptor(boyFriend, '__proto__')) // undefined
// <- 상속받았다는 것이다.

