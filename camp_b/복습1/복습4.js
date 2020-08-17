//  switch...case 문
// 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을때 사용한다. 


const device = '맥북';

switch (device) {
    case 'iphone':
        console.log('아이폰!');
        break;
    case 'ipad':
        console.log('아이패드!');
        break;
    case 'gl':
        console.log('갤럭시!');
        break;
    default: console.log('모르겠네요...');
}