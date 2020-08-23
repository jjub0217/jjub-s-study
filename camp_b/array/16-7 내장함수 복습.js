// slice 
// 배열의 요소를 잘라내는 함수
// slice 안에 들어가는 매개변수는 1개 혹은 2개이다. 
// slice(복사를 시작할 인덱스, 복사를 종료할 인덱스의 이전의 인덱스)
//      - 음수도 사용이 가능하다 : 배열의 끝에서부터 요소를 제거(복사)한다.


const fds17 = ['강주현','임영서','박나라','윤슬기'];
const leave = fds17.indexOf('윤슬기');
console.log(leave); // 3

const member = fds17.slice(-1); // <- 배열의 끝에서부터 1개의 요소를 제거(복사)
console.log(member); // ['윤슬기']

const member2 = fds17.slice(-2);// <- 배열의 끝에서부터 2개의 요소를 제거(복사)
console.log(member2); // ['박나라', '윤슬기']

const member3 = fds17.slice(1, 2);// <- 배열에서 1번째 인덱스에서 시작해서 
                                  //     2번째 인덱스 이전의 인덱스까지 제거(복사) 
console.log(member3); // ['임영서']
 

//////////////////////////////////////////////////////////

const bugs = ['문규', '석규', '영찬', '세진', '태헌', '태근','주익','재희'];
const myBoyFriend = bugs.indexOf('세진');

console.log(myBoyFriend); // 3

const bestBoyFriend = bugs.slice(3,4);

console.log(bestBoyFriend); // ['세진']
