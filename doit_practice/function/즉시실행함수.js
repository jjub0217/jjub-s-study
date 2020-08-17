let hi = function(){
    return '안녕하세요?';
}
console.log(hi()); // 안녕하세요?

let hi = () => {
 return   '안녕하세요?'
};
// hi();
console.log(hi());  // 안녕하세요?


let hi = () => 
    '안녕하세요?'
;
// hi();
console.log(hi());  // 안녕하세요?


//--------------------------------

let greet = function (name) {
    return `${name}님 안녕하세요?`;
}
// greet('세진');
console.log(greet('세진')); 

let greet = (name) => {
    return `${name}님 안녕하세요?`;
}
// greet('세진');
console.log(greet('세진')); 

let greet = (name) => 
`${name}님 안녕하세요?`;

greet('세진');
console.log(greet3('세진')); 

//----------------------------------------

let add = function(a, b){
    return a + b;
}
add(10, 20);
console.log(add(10, 20)); // 30

let add = (a, b) => {
    return a + b;
}
add(10, 20);
console.log(add(10, 20)); // 30

let add = (a, b) =>
a + b;

add(10, 20);
console.log(add(10, 20)); // 30




