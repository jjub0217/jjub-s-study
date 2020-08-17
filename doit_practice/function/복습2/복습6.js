// let hi1 = function(){
//     return '1 안녕하세요?';
// }
// console.log(hi1());  // 1 안녕하세요?

// let hi2 = () =>{
//     return '2 안녕하세요?';
// }
// console.log(hi2()); // 2 안녕하세요?

// let hi3 = () => '3 안녕하세요?';
// console.log(hi3()); // 3 안녕하세요?

//--------------------------------------------------

let hello1 = function(name){
    return `1 ${name}아 집중해라`;
}
console.log(hello1('주현')); // 1 주현아 집중해라

let hello2 = name => {
    return `2 ${name}아 집중해라`;
}
console.log(hello2('주현')); // 2 주현아 집중해라

let hello3 = name => `3 ${name}아 집중해라`;
console.log(hello3('주현'));  // 3 주현아 집중해라



