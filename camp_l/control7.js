// while문

/*
while(조건){
    <- 조건이 false 될 때까지 반복 실행
}
*/


// do while 문

/*
do {
    <- 일단 해당 문이 한번은 실행
    <- 조건이 false 될때까지 반복 실행
}
while(조건);
*/


// for of문
// 이터러블한 객체에 모두 사용할 수 있다. 
// 이터러블한 객체는 2가지가 있다. 
// 이터러블한 프로토콜을 자체적으로 내장하고 있는 객체 : 배열

for (const i of [1, 2, 3]){
    console.log(i);
}
// 1 2 3 

// ------------------------------------

// for in문
// 모든 프로퍼티(객체에서도 사용이 가능)
// 객체안에 있는 프로퍼티 하나하나를 for in 으로 돌릴수 있다. 


Object.prototype.test = function() {};
    for (const i in {a: 1, b: 2, c: 3}) {
        console.log(i);
    }


    // a b c test