// 타이머를 js 엔진이 하게 되면 블로킹이 된다. 

const timerId = setTimeout(() => {
    console.log('Hi');
}, 300) // <- 300 밀리초를 얘가 재는게 아니라 브라우저가 재고 있는것이다.
// <- 얘는 300밀리초 후에 호출해줘~ 라고 스케줄링 하는 함수이다.
// <- 얘는 타이머 id 를 반환한다. : 반환값인 id는노드와 브라우저의 id값은 다르다.
// 브라우저는 정수 / 노드에서는 객체를 반환한다.

clearTimeout(timerId);

// -> 이렇게 하면 setTimeout 은 표시가 안된다.
// 항상 실행컨텍스트를 염두에 두고 생각해라.

const timerId = setTimeout(() => {
return 1;
}, 300) 
// <- timerId 가 1 이 되려면 setTimeout 이 호출되서 1 이란 리턴값을
// 시켜야 하는건데, (호출을 해야 리턴값을 받을수 있다. )
// timerId 는 setTimeout 을 호출하지 않기 때문에 
// timerId 는 1 이 될수 없다.(1을 받을수 없다.)

// 디지털 시계 구현
// 현재 시간을 가져와서 1초에 한번씩 호출해야 한다. setInterval 로.
// setInterval 콜백 안에서(콘솔로그를 콜백안에서).


// 스탑워치 구현
// setInterval 을 클리어 시키면 된다.