// 논리곱 단축평가
// 특정값이 유효할때만 어떤 값을 조회할때만 사용한다


const result1 = true && false
// console.log(result1); // false

const result2 = false && true
// console.log(result2); // false

const print = 'dog' && 'cat'
console.log(print); // 'cat'

const printed = 0 && '주현'
console.log(printed); // 0

const result3 = true || true
// console.log(result3); // true

const result4 = false || true
// console.log(result4); // true

const print2 = 'dog' || 'cat'
// console.log(print2);  // 'dog'

// ----------------------------------------
// const dog = {
//     name: '멍멍'
// }

// function getName(animal) {
//     // animal 값이 존재할때에만 반환값을 반환해라

//     //  if(animal) {
//     //      return animal.name;
//     //  }
//     //  return undefined

//     return animal && animal.name
// }

// const name = getName(dog)
// const name = getName()
// console.log(name);

// ----------------------------------

// 논리합 단축평가\\\
// 만약 어떤 값이 falsy한 값이라면, 대체로 사용할 값을 지정해줄때 유용하다 

const namelessDog = {
    name: '뭉뭉이'
} // <- 이름이 없는 멍멍이다.

function getName(animal) {
    const name = animal && animal.name // <- animal 이 존재할때만, animal의 name 을 참조하겠다. 
    // <- animal 이 truthy한 값인지 checking

    /* ┌ 방법1
    if (!name) // <- 이름이 없는 animal 이라면(이름이 없는게 트루라면)
    {
        return '이름이 없는 동물입니다' // <- 이름이 없는 동물입니다를 반환
    }
    return name // <- 이름이 있는 animal 이라면 animal 자체를 반환
    */

    // 방법2
    return name || '이름이 없는 동물입니다' // <- 논리합은 한쪽이 true면 true 로 나온다.
                                // <- 논리합은 앞이 true 면 뒤도 안보고 앞의 truthy한 값이 나온다.
                                // <- 논리합은 앞이 false 이면 뒤의 truthy한 값이 나온다.
                                // <- 어찌됐든 둘다 falsy한 값이 아니면 결국 truthy한 값이 나온다.
    //중요중요 <---- name이 falsy한 값이면 '이름이 없는 동물입니다' 가 출력
    //              name이 truthy한 값이면 name이 출력
}
const name = getName(namelessDog); // <- 이름이 없는 멍멍이 자체를 인수에 넣었다. 
console.log(name); // <- 이름이 없는 동물입니다.

