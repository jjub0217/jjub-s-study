// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// // 위 for문에서 초기값을 정하는 'let i = 0;' 부분이 while 문 바깥으로 가게 되고
// // 조건식만 while 조건문에 들어가고 
// // 증감식은 코드블럭 안에 들어가게 된다. 

// let i = 0;

// while (i < 10) { // while문이 조건이 언젠가는 false가 되게끔 해야 한다.
//     console.log(i);
//     i++;
// }

// ---------------------------------------------------


let i = 0;
let isFun = false;

while (isFun === false) { // while문의 조건식이 false 일때 안의 코드블럭을 계속 실행해라
    console.log(i);
    i++;
    console.log(i);
    
    if(i === 30){
        isFun = true;
    }
}