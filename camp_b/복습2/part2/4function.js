// 화살표 함수

const add = (a, b) => {
    return a + b;
}
const sum = add(1, 2);
console.log(sum);

// ↑ 위 코드와 아래 코드는 같은 코드이다.
// const add = (a, b) =>  a + b
// const sum = add(1, 2);
// console.log(sum);



const hello = (name) => {
    console.log(`Hello! ${name}`);
    // return `Hello! ${name}!`;  <┐
}//                                │   
// const hi = hello('주현');       │
// console.log(hi);               <┘ 

hello('주현');