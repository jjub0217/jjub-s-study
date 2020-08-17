const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//  for-of 문
// 배열 안에 있는 것들을 사용해서 어떠한 작업을 해야 할때 사용한다.

// 예시1
for(let value of names){
    console.log(value);
}
// -----------------------------------------------------------------


// 예시2
const numbers = [10, 20, 30, 40, 50];

for(let number of numbers) {
    console.log(number);
}

// -------------------------------------------------------------

// for-in문
// 객체 안에 있는 것들을 사용해서 어떠한 반복 작업을 해아 할때 사용한다.

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}
// ┌ 프로퍼티 키를 배열처럼 만들려면 ?
// ↓
// console.log(Object.keys(doggy));
// // ['name', 'sound', 'age']

// // ┌ 프로퍼티 값을 배열처럼 만들려면 ?
// // ↓
// console.log(Object.values(doggy));
// // ['멍멍이', '멍멍', 2]

// // 배열형태로 반환하는데, 배열 안에 키랑 값이 함께 있게 하려면?
// console.log(Object.entries(doggy));
// // [ ['name', 'sound', 'age'], ['멍멍이', '멍멍', 2] ]

for (let key in doggy) { // doggy 안에 있는 key 들이 다 나타난다.
// console.log(key); // <- name sound age
console.log(`${key}: ${doggy[key]}`); // <- name: 멍멍이
//                                          sound: 멍멍
//                                          age: 2 
}

