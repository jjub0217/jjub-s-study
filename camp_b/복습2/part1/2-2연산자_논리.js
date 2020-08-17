
// 연산자 : 특정 연산을 할때 사용하는 문자
//      1. 논리 연산자
//          a. true 
//          b. false
//          c. NOT ( ! ) : 논리값(true 혹은 false)을 반전 시켜준다. 

var a = true;
console.log(a); // true
var a = !true;
console.log(a); // false
var a = !false;
console.log(a); // true

//          d. OR ( || ) : 논리합
//              - 둘중에 하나라도 true 면 값을 true 다. 
//              - 예시)
//                  'dog' || 'cat' : 둘중에 하나라도 true 면 전체 값이 true 인건데
//                                   앞의 표현식이 true 니까 뒤의 표현식은 볼 필요도 없이
//                                   해당 식의 전체 값은 'dog' 가 된다.

var a = true || true;
console.log(a); // true
var a = false || true;
console.log(a); // true
var a = true || false;
console.log(a); //true
var a = false || false;
console.log(a); // false

//          e. AND ( && ) : 논리곱
//              - 둘중 하나라도 false 면 false 다.
//              - 둘다 true 여야 한다.
//              - 예시)
//                  'dog' && 'cat' : 둘중 하나라도 false 면 전체 값을 false 이며,
//                                   둘다 true 여야 하니까 앞의 표현식이 true 여도 
//                                   뒤의 표현식이 false 면 전체 값이 false 가 된다.
//                                   그래서 앞의 표현식이 true 라고 해도 뒤의 표현식의 값으로 
//                                   식의 전체 값이 달라지기때문에 뒤의 표현식으로 값은 평가된다. 
//                                   그러므로 해당 식의 값은 뒤의 표현식의 값인 'cat' 이 된다.

var a = true && true;
console.log(a); // true
var a = false && true;
console.log(a); // false
var a = true && false;
console.log(a); // false
var a = false && false;
console.log(a); // false


// 논리 연산자의 연산 순서는 NOT > AND > OR 이다. 
const value = !(true && false || true && false || !false);
// <- 1. !(true && false || true && false || true);
//    2. !(false || false || true);
//    3. !(false || true)
//    4. !true
//    5. false
console.log(value); // false
