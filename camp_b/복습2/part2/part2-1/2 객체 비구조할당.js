// 객체 비구조할당(객체 구조분해) = 객체 디스트럭처링
//      - 객체에서 특정 값들을 추출해내는 것이다. 
//      - 객체의 프로퍼티키의 값을 매번 참조해야 했는데, 그러지 않고
//         객체 내부에서 그 안에 있는 값들을 밖으로 빼와서 프로퍼티 키와 
//          같은 이름의 변수에 할당 해준것이다.  




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


// function print (hero){
//     const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`;
//     console.log(text);
// }

function print(hero){
    // const { } = hero; // <- 어디에서 어떤 값들을 추출하고 싶은지 정의함.
    /* 내가 인수로 전달받는 객체에서 뽑아내고 싶은 프로터피키는 
        alias , name , actor 다. 
        위에 빈 객체 중괄호 안에, 아래처럼 내가 뽑아내고 싶은 프로퍼티를 넣으면 된다.*/ 
    const {alias,name,actor} = hero;// <- 각각의 프로퍼티 키의 값이 추출된다.
    // console.log(alias);//  alias 라는 프로퍼티 키의 값이 반환된다.
    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
    console.log(text);
}

print(ironman)
print(captainAmerica)



