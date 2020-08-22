// find
// **특정조건을 확인해서**, 조건이 일치하면 일치하는 요소 자체를 반환
// **찾으려는 인덱스의 요소 자체를 반환**
// find 안에는 콜백함수가 들어간다. 


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

const boy = bugs.find(member => member.name === '오세진');
console.log(boy); // { name: '오세진', age: 33}