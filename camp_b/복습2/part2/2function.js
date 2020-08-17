// 함수: 특정코드를 하나의 명령으로 실행할수 있게 해준다



// 특정값들의 합을 구해봐라.
// const a = 1;
// const b = 2;
// const sum = a + b; 

// console.log(sum);



function add(a, b) {
    sum = a + b;
    console.log(sum);
    // return a + b;      <┐
    // return sum;        <┴----┐
}//                             │
add(1, 2);//                    │           
// const sum = add(1, 2); <┬----┘  
// console.log(sum);      <┘

function hello (name){
    console.log(`Hello, ${name}!`);
}
hello('강주현');           



