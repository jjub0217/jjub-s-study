function repeat(n){
for(let i = 0; i < n; i++){ // 5번 순회 시키는 함수.
    console.log(i);
}
}
repeat(5);

// n = 5 / i = 0 / 0 < 5 true / 0
//         i = 1 / 1 < 5 true / 0 1
//         i = 2 / 2 < 5 true / 0 1 2
//         i = 3 / 3 < 5 true / 0 1 2 3
//         i = 4 / 4 < 5 true / 0 1 2 3 4
//         i = 5 / 5 < 5 false  
// 0 1 2 3 4 


function repeat2(n){
    for(let i = 0; i < n; i++){
        if(i % 2){
            console.log(i);
        }
    }
}
repeat2(5); // 1 3 

// n = 5 / i = 0 / 0 < 5 true / 0 % 2 = 0 / 0 = false
//         i = 1 / 1 < 5 true / 1 % 2 = 0 이 아닌 숫자 / <- true / 1
//         i = 2 / 2 < 5 true / 2 % 2 = 0 / 0 = false
//         i = 3 / 3 < 5 true / 3 % 2 = 0 이 아닌 숫자 / <- true / 3
//         i = 4 / 4 < 5 true / 4 % 2 = 0 / 0 = false
//         i = 5 / 5 < 5 false 


console.log(0 % 2 === 0);  // true // <- 0 은 짝수. // <- 0 은 false
console.log(1 % 2 === 0); // false // 즉, 0 이 아니고 뭔가 숫자가 있음 = true
console.log(1 % 2 === 1); // true
console.log(2 % 2 === 0); // true
console.log(3 % 2 === 0); // false
console.log(3 % 2 === 1); // true

