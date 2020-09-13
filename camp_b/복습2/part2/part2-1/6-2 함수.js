// 화살표함수: 화살표함수에서 가리키는 this 는 일반 함수에서 가리키는 this 와 다르다.


const add = (a, b) => {
    return a + b
}
const sum = add(1, 2)
console.log(sum); // 3

const add2 = (a, b) => a + b;
const sum2 = add2(3,5);
console.log(sum2); // 8



const hello = (name) => {
    console.log(`hello ${name}!`);
}
hello('주현') // hello 주현!


