// 어떤 값을 선언하게 될때, 하나의 이름에 여러 종류의 값을 넣을수 있다. 


// const dogName = '멍멍이'
// const dogAge = 2

// console.log(dogName); // 멍멍이
// console.log(dogAge); // 2

const dog = { // <- 여기서 쓰이는 중괄호는 코드블럭이 아니다. 
    name: '멍멍이',
    age: 2,
    cute: true,
    sample: {
        a: 1,
        b: 2
    },
    'key with space' : 'ssd'
}

// console.log(dog.sample);
// console.log(dog['key with space']);
// console.log(dogName.name);
// console.log(dogName.age);

const ironman = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
}

const captainAmerica ={
    name: '스티븐 로저스',
    actor : '크리스 에반스',
    alias: '캡틴 아메리카'
}

console.log(ironman);
console.log(captainAmerica);

function print (hero){
    const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`;
    console.log(text);
}
print(ironman)
print(captainAmerica)
