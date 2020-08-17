// // 1. 바로 아래의  if else if 문을 switch 문으로 바꾼다면? 
// const a = 10;
// if (a === 5) {
//     console.log('5 입니다!');
// } else if (a === 10) {
//     console.log('10 입니다!');
// } else {
//     console.log('5도 아니고 10도 아닙니다!');
// }

// // switch 문으로 바꿔보자.

// const a = 10;
// switch (a) {
//     case 5:
//         console.log('5 입니다!');
//         break;
//     case 10:
//         console.log('10 입니다!');
//         break;
//     default:
//         console.log('5도 아니고 10도 아닙니다!');
// }
// console.log(a);



// 2. device 값이 뭐냐에 따라서 다른 작업을 해볼거다.


// 그럴때 switch 를 사용한다. 

const device = 'iphone';

switch (device) // switch 문에 우리가 확인하고 싶은 값을 넣는다. 
{ // 그다음에는 case 를 하나하나 정해줄거다.
    case 'iphone':
        console.log('아이폰');
        break; // 어~ 비교하는거 이제 끝났어~!
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트');
        break;
        default: // 아무것도 일치 하지 않았을 경우 실행할 코드를 콜론 뒤에 넣는다. 
        console.log('모르겠네요..');
}