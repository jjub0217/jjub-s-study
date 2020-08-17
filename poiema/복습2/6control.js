// while문을 사용하여 0부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오

let i = 10;
while(i > 0){
    if(i % 2 === 1){
        console.log(i);
    }
    i--;
}