const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate(){
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a(){
       return this._a;
    }, 
    get b(){
        return this._b; // <- numbers.a(getter 함수의 a) 를 참조하게 된다면 _a 의 값을 참조할수 있게 한다.
    },
    set a(value){ // <- 파라미터를 전달받으면 this._a 값을 value 값으로 바꿔줄것이다.
        this._a = value;
        this.calculate(); // <- sum 값을 업데이트 해준다
    },
    set b (value){
        this._b = value;
        this.calculate();
    }
}
// numbers.calculate(); // calculate
// console.log(numbers.a); // 1 <- getter 함수 a(getter 함수만 선언했을 시점)

console.log(numbers.sum); // 3
numbers.a = 5; // <- get 함수 a 랑 set 함수 a 둘다에게 적용된다. 
// // 1. get a 함수에서 numbers 라는 객체의 _a 라는 프로퍼티 키의 값을 가져온다. : 1
// // 2. set a 함수가 호출되는데, 5 란 값이 value 라는 파라미터로 전달이 된다. 
// // 3. 전달받은 value 의 5 란 값이 get a 함수 내부의 value 라는 값으로 전달되고, 그 5 라는 값은 
// //    numbers 라는 객체의 _a 라는 프로퍼티 키의, 갱신되는 프로퍼티 값이 된다.
// //    그래서 numbers 라는 객체의 _a 라는 프로퍼티 키의 값은 5로 갱신이 된다. 
// // 4. set a 함수 내부에서 calculate 함수가 호출이 된다.
// //    calculate 함수는 numbers 라는 객체의 sum 이란 프로퍼티 값을 가져오고, _a 라는 프로퍼티 키의 값을 가져오고,
// //    _b 라는 프로퍼티 키의 값을 가져와서 연산하는 함수이다. 
// //    연산값이 7 이 나온다.

console.log(numbers.sum); // calculate
                          // 7
numbers.b = 7;            // calculate <- numbers 라는 객체의 프로퍼티를 아직 아무것도 안불렀기 때문에 
//                                      여기서 끝나는 것이다.
// 참조할때마다 값이 바뀌는게 아니라 값을 새로 갱신 할때마다 값이 바뀌는 것이다.