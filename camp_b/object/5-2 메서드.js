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
    children(){  
        console.log(this['female-child'] + this['male-child']);
    }
}

dog.say(); // 멍멍
// 여기서 말하는 say 는 프로퍼티 키를 말한다.

// 프로퍼티 키인데 호출이 된다고? 함수가 아니잖아.  : 은 할당 연산자가 아닌데 어째서 say 가 함수가 되는거지?
// -> 해결: 객체 안에서는, 프로퍼티 키에 함수를 값으로 : 으로 할당하는것과, 
//          일반적으로 변수에 함수를 = 로 할당하는 것과 같은 방식으로 동작되기 때문에 
//          함수를 값으로 : 으로 할당한 프로퍼티 키로 함수를 호출할수 있게 된다.

console.log(dog.say); // [function: said] <- dog 라는 객체의, say 라는 프로퍼티에 접근하면 함수의 이름이 불러와진다.
// 즉, 함수 자체가 불러와지는 것이다.
dog.children();  // 3


const cat = {
    name: '야옹이',
    sound: '야옹~'
}

cat.say = dog.say; // <- 프로퍼티 키 동적생성 
                  // : 존재하지 않은 프로퍼티 키에 값을 할당하면
                 // (현재 cat 이란 객체에는 say 라는 프로퍼티 키는 존재하지 않는다.)
                //  프로퍼티가 동적으로 생성되어 추가되고, 프로퍼티 값이 할당된다.
// cat.say = ( [function: said] = this.sound =
// = 여기서 this는 해당 cat 이란 객체이고, cat 이란 객체에서 sound 라는 프로퍼티 키의 값이 불러와진다 )

cat.say(); // 야옹~



const catSay = cat.say; // cat.say = [function: said] 
console.log(catSay); // [function: said]
catSay(); // undefined <- 이유는: catSay 는 변수일뿐. said 안에서 쓰이는 this는 누구를 가리키는건지 모르게 된다. 
         // 그래서 undefined 가 나오게 되는 것이다.  
 