// foo: {
//     console.log(1);
//     break foo;
//     console.log(2);
// }

// console.log('Done!');


// outer: for(let i = 0; i <3; i++){
//     for(let j = 0; j < 3; j++){
//         if( i + j === 3) break outer;
//         console.log((`inner [${i}, ${j}]`));
//     }
// }
// console.log('Done!');

let string = 'Hello World.';
let search = 'l';
let index = 0;

for (let i = 0; i < string.length; i++) {
    // console.log(string.length);
    if (string[i] === search) {   
// string의 특정 인덱스가 'l'이 맞으면 
        index = i; 
        break;
    }
}
// 그 인덱스를 출력해라
console.log(index); // 2