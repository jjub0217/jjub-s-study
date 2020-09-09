// 문자 d 일경우에 res의 값을 반전시켜라.

var string = 'Hello world'
var search = 'l'
var count = 0; 


for(let i = 0; i < str.length; i++){
    if(string[i] !== search){ // <- 'l' 이 아니면 현 지점에서 실행을 중단하고 증감식으로 간다.
        continue; // continue 를 만나면 continue 뒤의 문은 실행 안하고 증감식으로 간다.
        count++
    }
}
console.log(res);