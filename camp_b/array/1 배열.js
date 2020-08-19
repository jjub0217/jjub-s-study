// 여러개의 항목들이 들어가있는 리스트와 같다.
//  배열 안에 있는 요소들이 모두 똑같은 데이터 타입이 아니어도 된다.

const array = [1,2,3,4,5];
console.log(array); // [ 1, 2, 3, 4, 5 ]
console.log(typeof array); // object <- array 가 안나오는 건 버그다.
console.log(array[3]); // 3

const object = {
    name:'james', 
    age: 33
}

const array1 = [1, 'james', object, 4];
console.log(array1); // [ 1, 'james', { name: '강주현', age: 33 } ]
console.log(typeof array1); // object 
console.log(array1[2]); // { name: 'james', age: 33 }
console.log(array1[2].name); // james
console.log(array1[3]); // 4
console.log(array1[4]); // undefined


const objects = [
    { name: 'james',
      age: 33
        },
    { name: 'jasmin' }
];

console.log(objects); // [ { name: 'james', age: 33 }, { name: 'jasmin' } ]
console.log(objects[0]); // { name: 'james', age: 33  }
console.log(objects[0].age); // 33


// 기존 배열에 새로운 항목을 추가 : 'push'라는 배열 내장함수
objects.push({
    name: 'kim'
}) // <- object 라는 배열 안에 객체를, push 라는 배열 내장함수를 사용해서 새로 추가삽입.

console.log(objects); // [ {name: 'james', age: 33}, { name: 'jasmin' }, { name: 'kim' } ]

objects.push(35); // <- object 라는 배열 안에 35 라는 number 타입의 값을, push 라는 배열 내장함수를 사용해서 새로 추가삽입. 
console.log(objects); // [ {name: 'james', age: 33}, { name: 'jasmin' }, { name: 'kim' }, 35 ]

console.log(objects[2]); // {name: 'kim'}
console.log(objects[2].name); // kim

console.log(objects.length); // 4 

console.log(`objects 라는 객체 내부에는 `);
for(let i = 0; i < objects.length; i++){
    console.log(objects[i]);
}
console.log(`가 들어있습니다.`);

objects.push([1,2,4,6]);
console.log(objects);
/* [ 
    {name: 'james', age: 33},
    {name: 'jasmin'},
    {name: 'kim'},
    35,
    [1, 2, 4, 6]
  ]
*/

console.log(objects[4][3]); // 6
objects.push([2, 4, { name: 'kang'}]);
console.log(objects[5][2].name); // kang
console.log(objects.length); // 6