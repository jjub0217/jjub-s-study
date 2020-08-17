// < 프로퍼티 키와 프로퍼티 값의 갱신 >

const user = {
    firstName: 'Joohyun',
    lastName: 'Kang'
}

// const firstName = user.firstName;
// const lastName = user.lastName;

// console.log(firstName); // Joohyun
// console.log(lastName); // Kang

const { firstName, lastName } = user;
// 바로 위 코드와 바로 아래 코드는 동치다.
// 바로 위 코드는 user 라는 객체를 가리키는 변수를 직접 할당한것이고, 바로 아래 코드는 
// user 라는 객체 내부의 정보를 할당한것이다.
const { firstName, lastName } = {
    firstName: 'Joohyun',
    lastName: 'Kang'
}


console.log(firstName); // Joohyun
console.log(lastName); // Kang
