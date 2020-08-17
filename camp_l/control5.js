// switch를 이용한 조건문
// 어떤 값인지를 체크해서 맞으면 실행되는 블럭을 설정하는 것이다.

let n = 6;

switch (n) {
    default:
        console.log(n);
}

//-------------------------------------

switch (n % 5) {
    case 0:
        console.log('5의 배수입니다.');
        break;
    case 1:
    case 2:
    case 3:
    case 4: 
    console.log('5의 배수가 아닙니다.');
    default:
        console.log(n);
}