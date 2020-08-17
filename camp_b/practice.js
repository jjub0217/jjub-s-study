// function sumOf(numbers) {
//     let sum = 0; // 초기 합은 0 부터 시작이다. 
//     // numbers 배열 안에 있는 요소들을 하나하나씩 더해줄것이다. 
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//         // numbers 배열 안에 있는 값을 주루룩 반복을 하게 되면서 
//         // sum에 1 씩 더해주는 것이다.

//     }
//     return sum;
// }



// // 매개변수에 쓰인 numbers 는 배열이다. 
// // function sumOf(numbers) 라고 쓴것은 매개변수로 어떤 배열을 가져올건데,
// // 숫자로 이루어진 배열을 가져오는 것이다. 
// // 그 어떤 배열을 나타내는게 매개변수에 쓴 numbers 인거고.
// // sumOf 함수는 배열안에 있는 모든 값들의 합을 구하는 함수이다. 

// // 이 함수 하단에서는 result 라는 값에 함수의 결과물을 할당해줄것이다.


// const result = sumOf([1, 2, 3, 4, 5]);
// console.log(result);




// 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 
// 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서
// 반환해보세요.


// numbers 를 가지고 for 문을 사용해서 3보다 크다면 
// 특정 배열안에 값을 추가한 다음에 배열을 리턴하면 된다. 
// 배열을 만들고 
// numbers 에 대한 for문을 돌리고 
// 거기에 조건을 따져서 그 배열에 넣을지 말지 검사를 하고 
// 마지막으로 리턴을 하면 된다. 

function biggerThanThree(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (i < 3) {
            console.log();

        }
    }
    return;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]