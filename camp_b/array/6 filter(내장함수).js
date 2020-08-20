// 특정조건을 만족하는 요소를 찾아서, 그 요소들을 가지고 새로운 배열을 생성
// 특정배열에서 특정조건을 만족하는 요소들만 추출해서 새로운 배열을 생성 


// done 값이 false 인것만 추출해라 
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
]

// const notDone = todos.filter(todo => todo.done === false); 
// <- filter 안에 들어가는 매개변수는 함수다.
const notDone = todos.filter(todo => !todo.done); // <- filter 안에 들어가는 매개변수는 함수다.

// const done = todos.filter(todo => todo.done === true);
const done = todos.filter(todo => todo.done); // <- filter 안에 들어가는 매개변수는 함수다.

console.log(notDone); // [{ id: 4, text: '배열 내장함수 배우기', done: false } ]
console.log(done); 
