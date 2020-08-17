// 우리에게 주어진 값에 따라 다른 결과물을 반환하려면?

// function getSound(animal) { // <- 
//     if (animal === '개') // <- 만약에 animal 값이 '개' 라면
//         return '멍멍!'; // <- '멍멍' 이란 값을 반환하고,
//     if (animal === '고양이') // <- 만약에 animal 값이 '고양이' 라면
//         return '야옹!'; // <- '야옹' 이란 값을 반환하고,
//     if (animal === '참새') // <- 만약에 animal 값이 '참새' 라면
//         return '짹짹!'; // <- '짹짹' 이란 값을 반환하고,
//     if (animal === '비둘기') // <- 만약에 animal 값이 '비둘기' 라면
//         return '구구 구 구!'; // <- '구구' 이란 값을 반환하고,
//     return '...?'; // <- 해당사항이 없을때에는 이걸 반환해라
// }
// console.log(getSound('개')); // 멍멍
// console.log(getSound('비둘기')); // 구구
// console.log(getSound('인간')); // 값이 안나온다.


// 위 코드를 switch case 문으로 쓴다면?

// function getSound(animal) {
//     switch (animal) {
//         case '개':
//             return '멍멍!'; // <- switch 문안에서 return 을 하게 된다면
//                             // 굳이 break를 할 필요는 없다. 
//         case '고양이':
//             return '야옹!';
//         case '참새':
//             return '짹짹!';
//         case '비둘기':
//             return '구구 구 구 !';
//         default:
//            return '...?';
//     }
// }

// console.log(getSound('개')); // 멍멍
// console.log(getSound('비둘기')); // 구구
// console.log(getSound('인간')); // 값이 안나온다.


// 맨 위의 코드를 더 깔끔하게 코딩하려면 객체를 만들면 된다. 

function getSound(animal){
    const tasks = {
        개: 'dl',
    };
}

console.log(getSound(개)); // 멍멍
// console.log(getSound(비둘기)); // 구구
// console.log(getSound(인간)); // 값이 안나온다.