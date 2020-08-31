        
// 현재 날짜와 현재 시간을 알려주는 Date 객체를 만들어라
let now = new Date();
console.log(now); //  2020-08-31T04:17:05.340Z <- 현재 날짜와 시간

// 특정날짜를 저장한 Date객체를 만들어라
let spNow1 = new Date('2019-06-14')
console.log(spNow1); // 2019-06-14T00:00:00.000Z <- 특정날짜를 저장한 Date객체

let spNow2 = new Date('2019-06-14T20:30:00')// T 를 붙였다. (시간정보를 함께 저장하려면)
console.log(spNow2); // 2019-06-14T09:30:00.000Z <- 특정날짜를 저장한 Date객체(국제 표준시가 아니다)

let spNow3 = new Date('2019-06-14T20:30:00Z')// T 와 Z 를 붙였다.(시간정보를 함께 국제 표준시에 맞춰 저장하려면 )
console.log(spNow3); // 2019-06-14T20:30:00.000Z <- 특정날짜를 저장한 Date객체
