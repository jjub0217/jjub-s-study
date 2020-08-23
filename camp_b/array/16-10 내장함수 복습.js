// unshift


const members = ['임영서', '박나라', '강주현', '윤슬기'];
const leaver = members.pop();

console.log(leaver); // 윤슬기
console.log(members); // ['임영서','박나라','강주현']

const newMember = members.unshift('이한슬');
console.log(members); // ['이한슬', '임영서','박나라','강주현']