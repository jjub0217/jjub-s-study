const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    nickName : '아이언맨'
}

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
}

console.log(ironMan);
// { name: '토니 스타크', actor: '로버트 다우니 주니어', alias: '아이언맨' }
console.log(captainAmerica);
// { name: '스티븐 로저스', actor: '크리스 에반스', alias: '캡틴 아메리카' }

function print(hero){
    const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`
    console.log(text);  // 아이언맨(토니 스타크)역할을 맡은 배우는 로버트 다우니 주니어입니다.
}
print(ironMan);
print(captainAmerica);  // 캡틴 아메리카(스티븐 로저스)역할을 맡은 배우는 크리스 에반스입니다.
