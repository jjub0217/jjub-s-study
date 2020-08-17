// else if 문

// 논리적으로 구분된 여러가지 조건을 추가해서 여러 조건에 해당하는 
// 경우를 설정 할 수 있다. 

const n = 15;

if (n % 3 === 0) {
    console.log('n은 3의 배수 입니다.');
} else if (n % 5 === 0) {
    console.log('n은 5의 배수 입니다. ');
} else {
    console.log('n은 3의 배수도 아니고 5의 배수도 아닙니다.');
}

// 그렇다면 n이 3의 배수이면서, 5의 배수이면 뭐라고 출력될까?
// 그럴땐 더 좁은 영역의 조건을 앞에 써준다. 
// 더 적은 부분을 가지고 있는 걸 먼저 체크해줘야 한다. 

if (n % 3 === 0 && n % 5 === 0) { // <- "n이 3의 배수이면서 5의 배수라면"
    console.log('n은 15의 배수입니다.');
} else if (n % 3 === 0) {
    console.log('n은 3의 배수입니다.');
} else if (n % 5 === 0) {
    console.log('n은 5의 배수입니다.');
} else {
    console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다. ');

}

// 바로 위 코드를 보면 중복이 되는 표현식이 많으므로, 
// 이럴땐 중복이 되는 표현식을 변수에 할당하여 해당 변수를 재사용하자. 

const multipleOfThree = (n % 3 === 0);
const multipleOfFive = (n % 5 === 0);

if (multipleOfThree && multipleOfFive) { // <- "n이 3의 배수이면서 5의 배수라면"
    console.log('n은 15의 배수입니다.');
} else if (multipleOfThree) {
    console.log('n은 3의 배수입니다.');
} else if (multipleOfFive) {
    console.log('n은 5의 배수입니다.');
} else {
    console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다. ');
}

// 중복이 되는 표현식을 변수에 할당하여, 해당 변수를 재사용해서
// 코드를 깔끔하게 만들었습니다. 
// 그런데 위 코드를 더 깔끔하게 만들수 있습니다.
// 이럴땐 중첩을 사용하는 편이 좋습니다. 
// 중첩을 사용하려면 아래 코드처럼 코딩하면 됩니다. 

if (multipleOfThree && multipleOfFive) { // <- "n이 3의 배수이면서 5의 배수라면"
    console.log('n은 15의 배수입니다.');
} else {
    if (multipleOfThree) {
        console.log('n은 3의 배수입니다.');
    } else if (multipleOfFive) {
        console.log('n은 5의 배수입니다.');
    } else {
        console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다. ');
    }
} 