// 반복문에서 벗어나거나 그 다음 루프를 돌게끔 할수 있다. 

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i); // 위에 continue 를 쓰면 continue 다음 문이 실행안되고 무시된다. 
    if (i === 5)
        break; // 해당 반복문은 끝나는 것이다. 
}