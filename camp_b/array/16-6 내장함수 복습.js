// splice
// 특정항목을 제거하거나 추가할때 사용
// 전달받는 매개변수가 3개이다.
// 1. 제거하기 시작할 인덱스 차례
// 2. 제거하려는 요소의 개수
// 3. 새로 추가하려는 요소의 값

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
    },
    2
]

bugs.splice(3, 1, {name: '김아름', age: 32, boyFriend: '민주현'});
console.log(bugs);
/*[
  { name: '남택용', age: 32, girlFriend: '우효정' },
  { name: '오세진', age: 33, girlFriend: '강주현' },
  { name: '원영남', age: 33, girlFriend: '와이프' },
  { name: '김아름', age: 32, boyFriend: '민주현' }
]*/


// const me = bugs.splice(3, 1, {name: '김아름', age: 32, boyFriend: '민주현'});
// console.log(me);// 2 <- (3번째의 인덱스이면서, 1개 제거할 요소)의 값 

