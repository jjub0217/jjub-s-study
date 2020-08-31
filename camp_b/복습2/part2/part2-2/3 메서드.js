// 메서드안에서 화살표 함수는 사용할 수 없다.


const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say: function said(){
    console.log(this.sound);
    },
    sayHi(){
        console.log('주인님 사랑해옇 헿헤');
    }
}
dog.say();
dog.sayHi();


const cat = {
    name: '야옹이',
    sound: '야옹'
}
cat.say = dog.say;
cat.say();

