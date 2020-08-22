// filter
// 특정조건을 만족하는 요소들을 추출해서 새로운 배열을 생성
// filter 안에 콜백함수가 들어간다.

const bugs = [
    {
        name: '남택용',
        age: 32,
        girlFriend: '우효정'
    },
    {
        name: '오세진',
        age: 33,
        girlFriend: '강주현'
    },
    {
        name: '원영남',
        age: 33 ,
        girlFriend: '와이프'
    }
]

const sameAge = bugs.filter(member => member.age === 33);
console.log(sameAge);
// [ { name: '오세진', age: 33, girlFriend: '강주현' }]

