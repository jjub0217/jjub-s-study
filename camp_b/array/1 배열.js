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
    name: '멍뭉이'
})
console.log(object); // {name: 'james', age: 33}