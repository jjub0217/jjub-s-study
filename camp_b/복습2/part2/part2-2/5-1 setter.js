


const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate(){
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a (){
        return this._a
    },
    get b(){
        return this._b
    },
    set a (value){
        this._a = value;
        this.calculate(); // <- sum 이란 프로퍼티 키의 값을 업데이트 해준다 
    },
    set b (value){
        this._b = value
        this.calculate();
    }
}

console.log(numbers.sum); // 3

numbers.a = 5; /* calculate  <- set 함수인 a 함수가 실행된다. 
                                5 가 _a 라는 프로퍼티 키의 값으로 갱신이 되고, 
                                함수가 실행된다. 
                                5 라는 값으로 갱신된 _a 와, 갱신이 안된 _b 의 2 라는 값이 더해진다.
                                (더해지기만 했을뿐 리턴 하지 않았다.)       */  
console.log(numbers._a); // 5 <- 바로 위 코드로 인해 _a 라는 프로퍼티 키의 값이 갱신되었다. 
console.log(numbers.sum);// 7 <- 바로 위위 코드로 인해 calculate 함수의 반환값이 출력되었다. 

numbers.b = 7; // <- 값을 갱신할때마다 sum 값이 업데이트 된다. 
numbers.a = 9; // <- 값을 갱신할때마다 sum 값이 업데이트 된다. 
console.log(numbers.sum); // 16
