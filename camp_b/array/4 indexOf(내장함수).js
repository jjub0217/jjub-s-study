// indexOf 
//      - indexOf 안에 들어가는 매개변수는 요소의 값이 된다.  
//      - 배열에서 원하는 항목이 몇번째에 있는지 알려주는 함수
//      - 특정값과 일치하는 요소를 찾을때 사용한다. 


// 과연, 토르가 몇번째 있는 요소일까요?
const superHeroes = [ '아이언맨', '캡틴 아메리카', '토르', '닥터스트레인지'];

const index1 = superHeroes.indexOf('토르') // <- indexOf 안에 들어가는 매개변수는 요소의 값이 된다.  
console.log(index1); // 2 <- 2번째 인덱스에 '토르' 라는 요소가 존재한다.

const index2 = superHeroes.indexOf('닥터스트레인지')
console.log(index2); // 3 <- 3번째 인덱스에 '닥터스트레인지' 라는 요소가 존재한다

