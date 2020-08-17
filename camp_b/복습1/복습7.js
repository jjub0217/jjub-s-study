let i = 0;

// while (i < 10) { // false 가 되는 시점이 있게끔 조건식을 만들어야 한다.
//                 // 그렇지 않으면 무한루프 돈다.
//     console.log(i);
//     i++;
// }

let isFun = false;
while (isFun === false) {  // isFun이 false인게 맞다면~ 코드블럭 실행.
    console.log(i);
    i++;
    if(i === 30){
        isFun = true;
    }
}
