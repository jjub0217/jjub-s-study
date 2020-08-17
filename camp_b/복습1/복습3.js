// if...else...if문

const a = 7;


if (a === 5) {
    console.log('5 입니다!');
} else if (a === 10) {
    console.log('10 입니다!');
} else {
    console.log('5도 아니고 10도 아닙니다!');
}


// -------------------------------

// 위에 if...else...if 문을 삼항 조건 연산자로 바꿔보았다.

((a === 5) ? (console.log('5 입니다!')) : (a === 10 ? console.log('10 입니다!') : console.log('5도 아니고 10도 아닙니다!')))