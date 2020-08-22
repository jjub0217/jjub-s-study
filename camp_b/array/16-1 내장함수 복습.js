// map 

const soso = ['강주현','정자연','김유리','마선미','이규용','권영모','최지헌'];

const members = member => member + '씨';// -> members 라는 화살표 함수 정의
const sosomoim = soso.map(members) // <- members 라는 콜백함수를 map에 삽입. 
                                   // <- 인수로 전달받은 members 라는 콜백ㅎ함수를 반복호출하는 것이다 : forEach 와 같음
                         
console.log(sosomoim);
//[ '강주현씨', '정자연씨', '김유리씨', '마선미씨', '이규용씨', '권영모씨', '최지헌씨' ]



const FDS17 = ['임영서', '정세영'];
const friend = FDS17.map(FDS => FDS + '는 친구');
console.log(friend);
// ['임영성는 친구','정세영은 친구']
