// 함수 이름 없이 function 을 만든 후에
// 그 만들어진 것을 특정한 변수에 담아두는 것 
// 이것을 익명함수라고 한다. 


// 1.
const hello1 = function (){
    console.log('hello1');
    
}
console.log(hello1, typeof hello1); 
// [Function: hello1] function



// 2. 
const hello2 = function (name) {
    console.log('hello2', name);
    
}
hello2('세진'); // hello2 세진


// 3.
const hello3 = function (name){
    return `hello3 ${name}`
}
console.log(hello3('요섭')); // hello3 요섭

