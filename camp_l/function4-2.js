// new 함수
// new 연산자를 이용해서 객체를 생성하는데에 사용할수 있다. 
// 새로운 객체를 만들때 function 을 사용해서 틀을 만들고,
// 그 틀을 new 를 사용해서 하나의 인스턴스(하나의 객체)들로 만들어낼수 있는 기능이 있다.

function Person(name, age){
    this.name = name;
    this.age = age;
} 

// function Person 이라는 틀을 이용해서 여러 객체를 만들수 있다.
// Person 이라는 function 이 함수 바디에서 this 라고 하는 컨텍스트를 만들어내기 때문에 
// 아래 코드가 구동이 된다. 

// 위 코드의 this 가 하는 역할은 객체로 만들어졌을때, 그 객체를 가리키는 용도로 사용된다. 

const p = new Person('Mark', 37);
console.log(p, p.name, p.age); // Person { name: 'Mark', age: 37} , Mark , 37

const a = new Person('Anna', 26);
console.log(a, a.name, a.age); // Person { name: 'Anna', age: 26} , Anna , 26


const Cat = (name, age) =>{
    this.name = name;
    this.age = age;
}
const c = new Cat('주현', 37); // TypeError <- 화살표 함수 안에서는 this 가 생성되지 않는다.
                              // 그렇기 때문에 TypeError 가 난다. 

