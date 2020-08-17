// // 함수를 호출하게 될때 넣어야 할 파라미터를 넣지 않게 됬을때 기본값으로 
// // 사용할 값을 지정하는 것을 의미한다.

// function calculateCircleArea(r){
//     return Math.PI * r * r;
// }

// const area = calculateCircleArea();
// console.log(area);


// 파라미터를 넣어줘야 하는데, 안넣어줬을때 어떤 값을 기본값으로 사용을 하고 싶다면?

function calculateCircleArea( r = 1 ){
//                          기본값으로 1 을 사용하겠다는 말이다. 
    return Math.PI * r * r;
}
const area = calculateCircleArea();
console.log(area);


// ↑ 위 코드와 아래 코드는 같은 코드이다. 
const calculateCircleArea = ( r = 1 ) =>  Math.PI * r * r;
//                            기본값으로 1 을 사용하겠다는 말이다. 
const area = calculateCircleArea();
console.log(area);