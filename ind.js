const increase = function (num) {
    return ++num;
}
const decrease = function (num) {
    return --num;
}


const predicates = { increase, decrease }
console.log(predicates); // { increase: [Function: increase], decrease: [Function: decrease] }
// <- predicates : 전체 객체(객체이름)
// <- increase : 프로퍼티 키(메서드)
// <- decrease : 프로퍼티 키(메서드)


console.log(predicates.increase(5)); // 6
console.log(predicates.increase) // [ function: increase] : 어떤 인수가 올지 모르겠지만 함수의 결과값

console.log(predicates.decrease(5)); // 4
console.log(predicates.decrease); // [ function: decrease] : 어떤 인수가 올지 모르겠지만 함수의 결과값
 

//----------------------------------------------
function makeCounter(predicates) { // <- predicates 라는 객체를 매개변수에 전달하려고 한다.
    let num = 0;
    return function(){
        num = predicates(num);
        return num;
    }
}

const increaser = makeCounter(predicates.increase); // <- increase 라는 메서드의 결과값이 매개변수로 들어간다.
 