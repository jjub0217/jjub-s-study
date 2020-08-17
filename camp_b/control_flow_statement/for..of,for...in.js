// 배열을 다루게 될때 사용되는 반복문이다. 
// 배열 안에 있는 것을 사용해서 어떠한 작업을 하게 될때 사용한다. 

// const numbers = [10, 20, 30, 40, 50];

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// // // 10 20 30 40 50


// // 위의 for문을 대체해서 for... of 문을 아래처럼 나타낼수도 있다.

// for (let number of numbers){
//     console.log(number);
// }

// // 10 20 30 40 50 



//--------------------------------for...in
// for... in 이란 반복문은 객체에 대한 반복적인 작업을 처리할때 사용한다. 
// 객체의 정보를 배열의 형태로 받아오는 방법을 알아보자


const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy)); // 배열형태로 뭔가 반환하긴 하는데, 이 배열 내부에 뭐가 잇냐면 키랑 벨류 값이 함께 나타낸다.
//// [ [ 'name', '멍멍이' ], [ 'sound', '멍멍' ], [ 'age', 2 ] ]
console.log(Object.keys(doggy));
//// [ 'name', 'sound', 'age' ]
console.log(Object.values(doggy));
//// [ '멍멍이', '멍멍', 2 ]
console.log(doggy.age);
//// 2

for(let key in doggy){
    console.log(`${key}: ${doggy[key]}`);
}
//// name: 멍멍이
//// sound: 멍멍
//// age: 2
