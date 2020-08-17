// 재귀함수
// 재귀함수는 반복되는 처리를 위해 사용된다. 

function countdown1(n) {
    for(let i = n; i >= 0; i--)
    console.log(i);
}
countdown1(10); // 10 9 8 7 6 5 4 3 2 1 0

// 바로 위코드의 반복문은 바로 아래코드처럼 재귀함수로 바꿀수 있다. 


function countdown2(n){
    if(n < 0) return;
    console.log(n);
    countdown2(n -1); // <- 재귀함수 호출
}
countdown2(10); // 10 9 8 7 6 5 4 3 2 1 0


// 수학의 팩토리얼도 바로 아래코드처럼 재귀함수로 구현해낼수 있다.


// 1번 케이스 
let factorial1 = function foo(n) {
    if (n <= 1) return 1;
    return n * factorial1(n - 1);
}
console.log(factorial1(5)); // 120 


// 2번 케이스
let factorial2 = function foo2(n){
    if(n <= 1) return 1;
    return n * factorial2(n - 1);
}
console.log(factorial2(5)); // 120


// 3번 케이스 
function factorial3(n){
    if(n <= 1) return 1; // n <= 1 : 탈출조건으로 만든 제어문
    return n * factorial3(n - 1); // 일단 처음에 5 를 찍고, 
                            // 재귀호출을 사용하여 5보다 1이 작은 4 를 찍게 만든다.
                            // 5 * factorial(5-1) = 5 * factorial(4) : factorial 함수 호출문
                            // 5 * 4 * factorial(4-1) = 5 * 4 * factorial(3)
                            // 5 * 4 * 3 * factorial(3-1) = 5 * 4 * 3 * factorial(2)
                            // 5 * 4 * 3 * 2 * factorial(2-1) = 5 * 4 * 3 * 2 * factorial(1)
                            // 5 * 4 * 3 * 2 * 1
}
console.log(factorial3(5)); // 5! = 120 


// 4번 케이스(while문 사용)
function factorial4(n){ 
    if(n <= 1) return 1; // 탈출조건으로 만든 제어문
    let res = n; 
    while(--n) res *= n; // 현재 n에서 넘어온 5와, 그 5에서 1 을 차감 시킨후 
                        // 5 인 res 에 누적하여, 차감된 n의 값 4 를 곱한다. ( 5 * 4)
                        // 1. res 는 20이 되었고 
                        // 다시 while 문으로 들어간다. 
                        // 현재 n 은 4였으므로 차감시켜서 3 이 되고 20 인 res에 누적하여 
                        // 차감된 n의 값 3 을 곱한다. ( 20 * 6 )
                        // 2. res 는 20 * 3 = 60이 되었고
                        // 다시 while 문으로 들어간다. 
                        // 현재 n 은 3 이었으므로 차감시켜서 2 가 되고 60인 res에 누적하여
                        // 차감된 2 를 곱한다. ( 60 * 2)
                        // 3. res 는 60 * 2 = 120 이 되었고 
                        // 다시 while 문으로 들어간다. 
                        // 현재 n 은 2 었으므로 차감시켜서 1 이 되고 120 인 res 에 누적하여
                        // 차감된 1을 곱한다. ( 120 * 1)
                        // 4. res 는 120 * 1 = 120 이 되었고 
                        // 다시 while 문으로 들어간다. 
                        // 현재 n은 1 이었으므로 차감시켜서 0 이 되고 0 은 즉, falsy 한 값이 되므로 
                        // while 문을 탈출하게 되어 함수가 종료된다. 

    return res; // 1. res 는 (5 * 4) 20이 되었다. 
                // 2. res 는 (20 * 3) 60이 되었다.
                // 3. res 는 (60 * 2) 120이 되었다. 
                // 4. res 는 (120 * 1) 120이 되었다.
}
console.log(factorial4(5)); // 120
