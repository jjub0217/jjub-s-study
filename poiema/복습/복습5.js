// while 문

let count = 0;

// while(count < 3) {
//     console.log(count);
//     count++; // <- 이 문으로 인해서 무한루프 도는것을 방지하게 된다. 
// }
// // 0 1 2

while(true) {
    console.log(count);
    count++
    if(count === 3) break; // <- 특정한 조건으로 while 문을 탈출하게 만들게끔 할수도 있다.
}

console.log(1 % 2 === 0);

