// for ... in문
// 객체에 대한 반복적인 작업을 처리할때 사용

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}


console.log(Object.entries(doggy)); // [['name', '멍멍이'],['sound','멍멍'],['age','2']]
console.log(Object.keys(doggy)); // ['name', 'sound', 'age']
console.log(Object.values(doggy)); // ['멍멍이', '멍멍', 2]


for(let key in doggy){
    console.log(key);  // name sound age 
    console.log(`${key}: ${doggy[key]}`); // name: 멍멍이 sound: 멍멍 age: 2
} 



