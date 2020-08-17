

// while문은 for 문과 비교하면 변수 선언과, 증감식이 없다.
// 조건식만 있을 뿐이다.
// 단순히 숫자를 비교할때가 아니라, 조건식이 까다로운 경우(값이 true가 될때 등) 사용한다.

let i = 0;
// i에 변화를 주는 것을 코드 블럭 안에서 해야 한다.
let isFun = false;

while (i < 10) { // <- 언젠가는 조건식이 false 가 되게끔 break point 가 있어야 한다.
    console.log(i);
    i++;
} 

while (isFun === false){ //<- isFun이 false 일때 while 문을 반복해라
                        // 조건식이 true 일때만 while 반복문이 반복한다.
    console.log(i);
    i++;
    if(i === 30){
        isFun = true;
    }
}

// ↑ 
// └ 위 코드와 아래코드는 같은 코드이다. 
while (!isFun){ 
    console.log(i);
    i++;
    if(i === 30){
        isFun = true;
    }
}

let ys = 'man';
let i = 0;

while( ys === 'man') {
    console.log('약먹기');
    i++;
    if(i === 5){
        ys = false;
    }
}
