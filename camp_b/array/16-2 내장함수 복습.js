// indexOf

const bugs = ['남택용','원영남','오세진'];
let boy = bugs.indexOf('오세진');
console.log(boy); // 2 <- '오세진' 이라는 요소의 값은 2번째 인덱스이다. 


const what = bugs.map(bug => bug + +boy)
console.log(what);// ['남택용2', '원영남2', '오세진2']