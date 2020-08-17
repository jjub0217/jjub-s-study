function hello1() {
    console.log('hello1');

}
console.log(hello1, typeof hello1);
// [Function: hello1] function : function 이라 함은, 객체 중의 하나라는 뜻이다. 
// 이것은 내장객체다. 
// 함수도 객체의 한 종류다


function hello2(name) { // hello2 를 호출할때, name 이라고 하는 첫번째 칸에 들어오는
                        // 값을 name 이라는 이름으로 받아서 사용한다. 

    console.log('hello2', name); 

}
hello2('주현');  



// 함수를 호출하면 그 함수의 결과를 값으로 받아서 우리가 활용할수 있다. 
// 이렇게 함수에 결과를 돌려주는 것을 return 이라고 한다. 

function hello3(name){
    return `hello3 ${name}`;
}
hello3('주현');
console.log(hello3('주현')); // hello3 주현















// function hello2(name) {
// return name;
// }

// let result = hello2('주현');
// console.log(result);



// console.log(hello2('주현'));




// let hi = function(name) {
//     return name;
// }
// hi('주현');
// console.log(hi('주현'));


// let e = function add(a, b) {
//     return a + b;
// }
// console.log(e(2, 3));
// console.log(add(2, 3));


// console.log(2,3);
