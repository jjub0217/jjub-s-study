// 조건문
// 조건문을 만드는 기본 개념 : 표현식이 참으로 평가될때 실행되는 블럭을 설정해서 만드는 것이다.
// 여기서 블럭이란 중괄호로 설정하여 1개 이상의 statement를 
// 작성해놓은 코드 덩어리다.

if (true) {
    console.log('항상 실행'); // <- 표현식이 true 이기 때문에 항상 조건 안으로 들어가게 된다. 
}

if (false) {
    console.log('항상 실행되지 않음'); // <- 표현식이 false 이기 때문에 무시된다.
}

if (true) console.log('항상 실행');
if (false) console.log('항상 실행되지 않음');


// 그렇다면 언제 표현식이 true로 평가되고 false 로 평가될까?
// 당연히 대표적으로 불리언 자료형이 있고, 불리언 자료형이 아닐수도 있다.
// 불리언 자료형이 아니어도 암묵적으로 불리언 값으로 평가된다. 

// 거짓으로 평가되는 값들을 falsy 라고 한다 : false , 0 , null , undefined , NaN

if (false) console.log(false);
if (0) console.log(false);
if ('') console.log(false);
if (null) console.log(false);
if (undefined) console.log((false));
if (NaN) console.log(false);

// 참으로 평가되는 값(=falsy의 반대)들을 truthy 라고 한다
//  : true , 37(number) , 'Mark'(빈 문자열이 아닌 문자열), {} , []

if (true) console.log(true);
if (37) console.log(true);
if (-37) console.log(true);
if ('Mark') console.log(true);
if ({}) console.log(true);
if ([]) console.log(true);


// if 문 만으로 프로그래밍 하기에는 너무 불편하기 때문에 
// if else 문을  쓸수 있다.

// if 의 조건 표현식이 참이 경우 말고 아닐때 실행하는 블럭을 설정할수 있다.

const n = 37;
if (n > 0) {
    console.log('n이 0보다 큰 경우');
} else {
    console.log('n이 0보다 크지 않은 경우'); // <- n 이 0 이거나 0보다 작다는 해석
}

if (n > 0)
    console.log('n이 0보다 큰 경우');
else
    console.log('n이 0보다 크지 않은 경우'); // <- n 이 0 이거나 0보다 작다는 해석