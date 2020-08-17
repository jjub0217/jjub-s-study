function add(x, y){
    if(typeof x != 'number' || typeof y != 'number'){ 
// x 가 number 타입이 '아닌게 맞거나' y가 number 타입이 아닌게 맞다면 

        throw new TypeError // TypeError 를 던져라.
    }
    return x + y; // 그게 아니면 x + y 를 해라
}
// x 는 인수 2 를 전달받은 매개변수로 number 타입이고,
// y 는 전달받은 인수가 없기때문에 y 는 undefined 가 되므로 number 타입이 아닌게 맞다.
// 논리합은 둘중에 하나라도 true면 true 이며, 앞의 표현식이 false 일때
// 뒤의 표현식이 true면 뒤의 표현식으로, false 면 해당 조건식 전체가 false 가 된다.

// y 부분이 true 이므로 TypeError를 던져야 한다. 

console.log(add(2));   // TypeError <- 인수는 모두 숫자여야 한다. 
console.log(add('a', 'b'));   // TypeError <- 인수는 모두 숫자여야 한다.

