// function 과 new Function(); 의 차이점 

// const a1 = 1;

// const test1 = new Function('return a1');
// console.log(test1()); // ReferenceError <- Function 생성자 함수로 만들어낸 변수 'a' 는 const 키워드를 사용하여 
                    // 1을 할당한 변수 a 와 전혀 상관관계가 없게 된다. 
                    // 즉, 다른 변수라는 것이다. 



// global.b = 0;

// const test2 = new Function('return b');
// console.log(test2());   // 0 <- Function 생성자 함수로 만들어낸 변수 b 는 
//                         // 글로벌(전역) 변수 b 와 상관관계가 있다. 
//                         // 즉, Function 생성자 함수로 만들어낸 변수는
//                         // global 을 사용하여 만들어낸 변수하고만 연결된다.  


const a2 = 2;

const test = function(){
    return a2;
}
console.log(test()); // 2 <- Function 생성자 함수를 사용한게 아니라 익명함수를 사용해서 
                    // cording 한 소스이기때문에 제대로 구동이 된다. 
