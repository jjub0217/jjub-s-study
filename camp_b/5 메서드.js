// 객체 안에 함수넣기 
// 함수는 값으로 취급할수 있기 때문에 프로퍼티 값(= 메서드)의 위치에 올수 있다.
// 하지만 객체 내부에 화살표 함수를 넣으면 작동하지 않는다 
// 화살표 함수에서의 this 는 자기가 속해있는 곳으로 연결하지 않기 때문에 작동하지 않는다.

const dog = {
    name: '멍멍이',
    sound: '멍멍',
    'female-child': 2,
    'male-child' : 1,
    say: function said(){
        console.log(this.sound);
        // 메서드 내부에서 사용된 this 는 객체 자신을 가리키는 변수이다. 
        // 여기서 this 는 이 함수가 위치한 객체 자기 자신을 가리킨다. 즉 여기서는 dog 를 가리킨다. 
        // 그래서, dog 라는 객체의 sound 라는 프로퍼티 키의 값이 콘솔창에 불러와진다.
    },
    children(){  // 익명함수도 객체 안에 프로퍼티 값으로 들어올수 있다.
        console.log(this['female-child'] + this['male-child']);
        // 여기서 this 는 위와 마찬가지로 객체 자신을 가리키는 dog 이다.
    }
  
}

dog.say(); // 멍멍
// 여기서 말하는 say 는 프로퍼티 키를 말한다.
console.log(dog.say); // [function: said] <- dog 라는 객체의, say 라는 프로퍼티에 접근하면 함수의 이름이 불러와진다.
                     // 즉, 함수 자체가 불러와지는 것이다.
dog.children();  // 3