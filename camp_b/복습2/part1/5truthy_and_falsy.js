

// // falsy 값
// //      1. undefined
// //      2. null
// //      3. 0
// //      4. ''
// //      5. NaN : 연산을 하려는데, 연산을 할수 없는 상황일때 사용된다.
// //          - 예시)
//              const value = 1 / '문자';
//              console.log(value); // NaN



// function print (person) {
//     if(person === undefined){
//         return;
//     }
//     console.log(person.name);
// }

// const person = {
//     name: 'jon'
// };

// print(person); // jon



// function boyFriend (sejin) {
//     // if(sejin === undefined || sejin === null ){
//     //     return; // <- 출력되는 값은 없지만 에러가 나지 않는 정상적으로 돌아가는 코드가 된다.
//     // }
//     //      └>  이렇게 작성해도 되지만 코드가 넘나 길다. 
//     if(!sejin){
//         return;
//     } 
//     console.log(sejin.gender);
// }

// const sejin = {
//     age: 33,
//     gender: 'man',
//     power: 100
// };

// const sejin = null;

// boyFriend(sejin);




function boyFriend (sejin) {
    if(!sejin){
        return;
    } 
    console.log(sejin.power);
}

const sejin = {
    age: 33,
    gender: 'man',
    power: 100
};

boyFriend(sejin);