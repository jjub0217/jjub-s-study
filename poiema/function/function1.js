// arguments 가 어떤 프로퍼티인지 알아보자. 

function add(x, y) {
    console.log(arguments); // [Arguments] { '0': 2, '1': 5, '2': 10 }

    return x + y;
}
console.log(add(2, 5, 10)); // 7



// arguments 객체의 length를 사용한 함수

function add1(){
    console.log(arguments); // [Arguments] {'0': 2, '1': 5, '2': 10}
    console.log(arguments.length); // 3
    
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i] // 0 + 2
                            // 0 + 2 + 5 
                            // 0 + 2 + 5 + 10 
                            // 17
    }
    return sum;
}

console.log(add1(2, 5, 10)); // 17

