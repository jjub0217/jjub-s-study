
// // 숫자로 이루어진 배열을 매개변수에 넣어주면
// // 그 모든 변수의 모든 합을 구해봐라.


function sumOf(numbers){
let sum = 0; //<- 초기합은 0 부터 시작한다.

    for (let i = 0; i < numbers.length; i++){ //<- numbers 배열에 있는 요소들릉 하나씩 더해줄것이다.
        sum += numbers[i]; //<- 넘버 배열 안헤 있는 값을 반복하면서 sum 에 1 씩 더해준다.
                          // <- numbers 를 반복하는 그 몇번을 인덱스화해서 더해라.    
    }
    return sum; //<- return 을 하는 이유는, 함수안에서 기껏 sum 이란 변수를 써먹어가면서
                // 함수를 채웠는데, 즉 기껏 sum 이란 떡을 함수 안에서 기껏 쿵짝쿵짝 겁나 만들었는데 
                // sum 이란 떡을 출고하지 않은 느낌적인 느낌.
                
} // sum 이 함수 전체의 결과값이 되는 것이다.

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);



// ↓ 위 코드와 아래코드는 같은 코드이다. 
// hi 라는 변수에 함수값을 할당했느냐 안했느냐의 차이.


let hi = function sumOf (numbers){
    let sum = 0; 
    
        for (let i = 0; i < numbers.length; i++){ 
            sum += numbers[i];     
        }
        return sum;
    } 
console.log(hi([1, 2, 3, 4, 5]));
// console.log(sumOf([1, 2, 3, 4, 5]));
