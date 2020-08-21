// reduce 내장함수
// 배열이 주어졌을때 모든 요소들을 사용하여 어떠한 값을 연산할때 사용한다.

// reduce(누적된 값을 계산함수:  (acc, cur)<- 해당 함수의 매개변수는 2개를 받아온다. => 함수의 결과값(이 값을 어케 연산할지의 계산식) 
//          / 함수 다음에 넣어야 할 것:  acc 의 기본값)


const numbers = [1, 2, 3, 4, 5];
// 모든 요소들을 더해서 총합을 구해보자.


// 방법1 f
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += i;
// }
// console.log(sum); // 15

// 방법2 forEach
// let sum = 0;
// numbers.forEach(number => sum += number);
// console.log(sum); // 15

// 방법3 reduce                                
//                                                  __┌> acc 의 초기값
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
//                          ─┬─ ￣￣│   ￣￣└>누적된 값
//                           │      └> 배열의 요소
// 초기값  0 = acc ----------┘ + 배열의 첫번째 요소 1 = 1
// acc = ( 0 + 1 : 1 ) + 배열의 두번째 요소 2 = ( 0 + 1) +2 = 3
// acc = ( 0 + 1 + 2 : 3 ) + 배열의 세번째 요소 3 = ( 0 + 1 + 2 ) + 3 = 6
// acc = ( 0 + 1 + 2 + 3 : 6 ) + 배열의 세번째 요소 4 = ( 0 + 1 + 2 + 3 ) + 4 = 10 
// acc = ( 0 + 1 + 2 + 3 + 4 : 10 ) + 배열의 세번째 요소 4 = ( 0 + 1 + 2 + 3 + 4 ) + 5 = 15
console.log(sum); // 15



// 모든 요소들의 총합의 평균을 구해라
// const numbers = [1, 2, 3, 4, 5];



// 방법1 
const average1 = numbers.reduce((acc, cur) => acc + cur / numbers.length, 0);
console.log(average1); // 3



// 방법2                                           ____┌> 우리가 함수를 실행하고 있는 자기 자신
const average2 = numbers.reduce((acc, cur, index, array) =>
    //                                    ￣￣￣└> 각 요소들이 몇번때 인덱스인지 알려준다. 
    {
        if (index === array.length - 1) { // <- 현재 처리하고 있는 배열 요소가 맨 마지막 요소라면
            //      예시: index === array.length(5) - 1 <= index 가 4라면 
            return (acc + cur) / array.length;
        }
            return acc + cur;
    }, 0)
    console.log(average2); // 3

/* 초기값 0 = acc , 배열의 첫번째 요소 1 , index = 0 , array = numbers
    if( 0 === 5 - 1 ){
      return  (0 + 1) / 5
    }
      return 0 + 1
      
acc(누적되는 값)  = 1 
*/
/* acc = 1 , 배열의 두번째 요소 2 , index = 1, array = numbers
    if( 1 === 5 - 1 ){
        return  (1 + 1) / 5
        }
        return 1 + 2
        
acc(누적되는 값)  = 3
*/
/* acc = 3 , 배열의 세번째 요소 3 , index = 2, array = numbers
    if( 2 === 5 - 1 ){
        return  (3 + 3) / 5
        }
        return 3 + 3
        
    acc(누적되는 값) = 6
*/
/* acc = 6, 배열의 네번째 요소 4 , index = 3, array = numbers
    if( 3 === 5 - 1 ){
        return  (6 + 4) / 5
        }
        return 6 + 4
        
    acc(누적되는 값)  = 10
*/
/* acc = 10, 배열의 다섯번째 요소 5, index = 4, array = numbers
    if( 4 === 5 - 1 ){
        return  (10 + 5) / 5
        }
        return 10 + 5
        
    acc(누적되는 값)  = 15
    console.log(average) // 15/5  = 3 
*/

















