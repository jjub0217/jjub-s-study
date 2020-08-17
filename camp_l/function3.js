
function hello1() {
    console.log('hello1');

}
hello1(); // hello1 


/////////////////////////////

let hello2 = function () {
    console.log('hello2');
}

hello2(); // hello2

///////////////////////////


hello3(); // ReferenceError

const hello3 = function(){
    console.log('hello3');
    
}

hello3(); // hello3



