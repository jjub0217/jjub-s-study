// 어떤 객체가 주어질것이다.
const o = {
    name: 'Lee',
    age: 20
}

const getValue = function (obj, key) {
let result = obj[key];
    // let result = obj.name
    // let age = obj.key;
    return result;
}
console.log(getValue(o, 'name'));  // 'Lee' <- 여기서 'name' 은 키라서 문자열 '' 을 붙힌것이다.
// // 변수여야, name 이라고 '' 안 붙히는 것이다.
console.log(getValue(o, 'age'));  // 20 

// ------------------------------------------------

const crateObject = function (key, value) {
    return {[key]: value}
}
console.log(crateObject('name', 'Lee'));



const result = function person(name, age){
    return { ['name']: name, ['age']: age }
  }
  
  const idol1 = new result('Lee', 30)
  console.log(idol1);