// shift

const bugs = ['문규', '석규', '영찬', '세진', '태헌', '태근','주익','재희'];
// const myBoyFriend = bugs.indexOf('세진');

// console.log(myBoyFriend); // 3

// const bestBoyFriend = bugs.slice(3,4);

// console.log(bestBoyFriend); // ['세진']



// const remove = bugs.shift(); // <- 제거한 첫번째 배열의 **요소를 반환**해라
// console.log(remove); // 문규


bugs.shift(); // <- 첫번째 배열의 요소를 제거한 **배열을 반환**해라
console.log(bugs); // ['석규', '영찬', '세진', '태헌', '태근','주익','재희']

bugs.shift(); 
console.log(bugs); // [영찬', '세진', '태헌', '태근','주익','재희']

bugs.shift(); 
console.log(bugs); // ['세진', '태헌', '태근','주익','재희']
