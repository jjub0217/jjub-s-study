// 어떤 값을 선언하게 될때, 하나의 이름에 여러 종류의 값을 넣을수 있다. 


// const dogName = '멍멍이'
// const dogAge = 2

// console.log(dogName); // 멍멍이
// console.log(dogAge); // 2

const dog = { // <- 여기서 쓰이는 중괄호는 코드블럭이 아니다. 
    name: '멍멍이',
    age: 2,
    cute: true,
    sample: {
        a: 1,
        b: 2
    }
}

console.log(dog.sample);



// console.log(dogName.name);
// console.log(dogName.age);