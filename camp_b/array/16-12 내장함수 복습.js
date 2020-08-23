// join


const firstCouple = ['오세진', '강주현'];
const secondCouple = ['남택용', '우효정'];
let pow1 = [];
let pow2 = [];

const sentence1 = firstCouple.join('과 ');
console.log(sentence1); // 오세진과 강주현 <- string

pow1.push(sentence1);
console.log(pow1); // ['오세진과 강주현']

const sentence2 = secondCouple.join('과 ');
console.log(sentence2); // 남택용과 우효정 <- string

pow2.push(sentence2);
console.log(pow2); // ['남택용과 우효정']

const couple = pow1.concat(pow2);
console.log(couple); // ['오세진과 강주현', '남택용과 우효정']