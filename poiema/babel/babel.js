// class Student {

//     name = '주현';
//     age = 33;



// }

// const me = new Student();
// console.log(me); // Student { name: '주현', age: 33 }




// class Student {

//   constructor(name, age){
//       this.named = name;
//       this.aged = age;
//   }
// }

// const me = new Student('주현', 31);
// console.log(me); // Student { name: '주현', age: 31 }
// // └> constructor 



class Student {

    constructor(name, age) {
        this.name = name;
        // Student 라는 class 의 name 이라는 것은 = '주현' 이다
        this.age = age;
        // Student 라는 class 의 age 이라는 것은 = 31 이다

    }
    printName() {
          console.log(`${this.name}, ${this.age}살이다`); 
    }

}

const me = new Student('주현', 31);
console.log(me); // Student { name: '주현', age: 31 }
me.printName(); // 주현, 31살이다










