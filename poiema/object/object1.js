// 프로퍼티가 0개 이상 있는 것을 객체라고 한다.
// JS 에서 사용할수 있는 모든 값들은 모두 프로퍼티의 값이 될 수 있다. 

let person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); // object
console.log(person); 
// { name: 'Lee', sayHello: Function }
