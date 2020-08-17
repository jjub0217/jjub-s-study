// 프로퍼티 동적생성(새로운 프로퍼티(속성) 추가 가능)
//  - 존재하지 않는 프로퍼티 키에 값을 할당하면 프로퍼티가 동적으로 생성된다.

const dog = {
    name: '멍뭉이', 
    age: 2
}
dog.gender = 'male'; // <- 기존 dog 라는 객체에 존재하지 않는 프로퍼티 동적 생성
console.log(dog); // { name: '멍뭉이', age: 2, gender: 'male'}

const person = {
    name: '강주현',
    age: 33,
    gender: 'female'
}

person.company = 'fast-campus'; // <- 기존 person 이라는 객체에 존재하지 않는 프로퍼티 동적 생성
console.log(person); // { name: '강주현', age: 33, gender: 'female', company: 'fast-campus}

const james = {
    gender: 'male',
    color: 'white',
    company: 'fast-campus'
}

james.age = 33; // <- 기존 james 라는 객체에 존재하지 않는 프로퍼티 동적 생성
console.log(james);
// { gender: 'male', color: 'white', company: 'fast-campus', age: 33}