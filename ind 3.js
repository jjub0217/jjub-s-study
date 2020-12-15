// const fastCampus = function (number, member) {
//     number = number;
//     member = member;
//     return `fds${number}기는 현재 ${member}명입니다`
// }

// console.log(fastCampus('17', 19)); // fds17기는 현재 19명입니다.


// const fds = {
//     fastCampus
// }; // fds 라는 객체에 fastCampus 라는 함수를 할당하였다.
// console.log(typeof fds); // object
// console.log(fds.fastCampus('16', 20)); // fds16기는 현재 20명입니다.
// // <- fastCampus 는 메서드가 되었다.
// // <- 변수였던 fastCampus를 메서드로서 호출하였다.

// function add(fds) {
//     console.log('잘 되고 있는 것인가?');

//     return function () {
//         fds()
//     }
// }

// add(fds.fastCampus)





const increase = function (num) {
    return ++num;
}

const decrease = function (num) {
    return --num;
}

const pre = {
    increase,
    decrease
};
console.log(pre); // { increase: [Function: increase], decrease: [Function: decrease] }
console.log(typeof pre); // object
console.log(typeof increase); // function : increase가  <- 메서드가 되었다.


function makeCounter(ppp) { // pre 라는 객체의 메서드인 increase 가 ppp 라는 매개변수로 들어왔다.
    let num = 0;
    console.log(typeof ppp); // function : const increase = function (num) {
//                                                      return ++num; }
    return function () { 
        num = ppp(num); // <- increase 라는 함수의 매개변수로 함수 몸체 내부에서 선언한 num 값이 들어간다.
        //                    increase 라는 함수 안에서 매개변수 값이 바뀐다.
        console.log(num); // num = 0 -> ++num -> num = 1
        return num;
    }
}

const inCre = makeCounter(pre.increase)
console.log(inCre()); // 1
console.log(inCre()); // 1
console.log(inCre()); // 2
console.log(inCre()); // 2