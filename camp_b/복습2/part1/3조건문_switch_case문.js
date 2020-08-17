// 2. switch case 문 : 특정값이 무엇이냐에 따라서 다른 작업을 하고 싶을때 사용
//                  - break 문을 반드시 필수로 입력해줘야 한다.

const device = 'iphone';

switch (device) // () 안에 내가 확인하고 싶은 값을 지정
{
    //case 뒤에 device 가 어떤것과 일치할때 : 어떤 것을 하고 싶은지 작성
    case 'iphone':
        console.log('아이폰');
        break;
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트');
        break;

        // default : 위의 case 중에서 아무 case에도 해당되지 않는 경우에 작성
    default:
        console.log('모르겠네요...');
}
아이폰



// const sejin = 'soso';

// switch (sejin) {

//     case 'hungry':
//         console.log('세진이는 지금 배가 고픕니다.');
//         break;
//     case 'notHungry':
//         console.log('세진이는 지금 배가 안고픕니다.');
//     break;
//     case 'veryHungry':
//         console.log('세진이는 지금 개배고픕니다.');
//     break;
//     default : 'soso';
//         console.log('세진이는 지금 애매합니다');
// }
// 세진이는 지금 애매합니다.