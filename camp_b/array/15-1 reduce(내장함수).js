// reduce 내장함수
// 배열이 주어졌을때 모든 요소들을 사용하여 어떠한 값을 연산할때 사용한다.

// reduce(누적된 값을 계산함수:  (acc, cur)<- 해당 함수의 매개변수는 2개를 받아온다. => 함수의 결과값(이 값을 어케 연산할지의 계산식) 
//          / 함수 다음에 넣어야 할 것:  acc 의 기본값)

const numbers = [1, 2, 3, 4, 5];


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


////////////////////////////////////////////////////////////////

// 각 알파벳들이 배열 안에 몇개씩 있는지 세서, 객체에 결과를 넣어라
const alphabets = ['a','a','a','b','c','c','d','e'];

const count = alphabets.reduce((acc, cur) => {
    if(acc[cur]) // <- acc 안에 cur 가 존재하는지 확인
    // 예시: if(acc['a']) = if(acc.a)가 true 이면
    {
        acc[cur] += 1; // <- 값에 1 을 더해라
    }else { // <- 그렇지 않다면,
        acc[cur] = 1; // <- acc[cur] 를 1 로 설정할것이다.
    }
    return acc;
}, {})
// acc : 각 요소들에 대하여 루프 돌려서 어떠한 누적된 값을 연산하는 값
// cur : 배열안의 각 요소
// {} : 초기값을 빈 객체로 부여하였다. 
console.log(count); // { a: 3, b: 1, c: 2, d: 1, e: 1 }

// 초기값 acc : 빈 객체, cur : 'a' => 비어있는 객체에 a 가 있는지 확인을 한다. 
//                                   비어있는 객체에 a 가 없으니까 객체 안에 a 값을 1 이라고 생성
// acc : { a: 1} <- acc 라는게 객체를 가리키는 변수가 된다. 
/* if( acc 에 a 가 존재하면){
    a: 1 햇던거에 1 을 더한다
} 
//  acc: {a: 2}
*/ 
