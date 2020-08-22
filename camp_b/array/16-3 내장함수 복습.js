// findIndex
// **특정조건을 확인해서**, 조건이 일치하면 일치하는 요소의 인덱스를 반환
// **찾으려는 인덱스를 반환**
// findIndex 안에는 콜백함수가 들어간다. 


const bugs = [
    {
        name: '남택용',
        age: 33
    },
    {
        name: '오세진',
        age: 33
    },
    {
        name: '원영남',
        age: 33
    }
]

const boy = bugs.findIndex(member => member.name === '오세진');
console.log(boy); // 1 <- name 이라는 프로퍼티 키의 값이 '오세진'인 요소의 인덱스가 1 이다
