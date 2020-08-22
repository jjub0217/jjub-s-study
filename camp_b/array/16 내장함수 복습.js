// forEach
const soso = ['강주현','정자연','김유리','마선미','이규용','권영모','최지헌'];
const pows = [];


// for(let i = 0; i < soso.length; i++){
//     // ┌> 방법 1 )배열 밖으로 꺼내서 바꾸기
//     console.log(soso[i] += '씨');
//     //  강주현씨 정자연씨 김유리씨 마선미씨 이규용씨 권영모씨최지헌씨 

//     // ┌> 방법2 )배열 안의 요소들만 바꾸기
//     soso[i] += '씨';// <-----┐
// }//                          │
//     c onsole.log(soso);// <---┘
// // ['강주현씨','정자연씨','김유리씨','마선미씨','이규용씨','권영모씨','최지헌씨'];


// // 방법 3 )배열 밖으로 꺼내서 바꾸기
// soso.forEach(member => console.log(member+='씨'));
// //  강주현씨 정자연씨 김유리씨 마선미씨 이규용씨 권영모씨최지헌씨 


// // 방법 4 ) 배열 안의 요소들만 바꾸기
// soso.forEach(member => 
//     pows.push(member+'씨'))    
//     console.log(pows);
//     // ['강주현씨','정자연씨','김유리씨','마선미씨','이규용씨','권영모씨','최지헌씨'];
    
// 방법 5 )
// function print(member){
//     pows.push(member+'씨');
// }

// soso.forEach(print);
// console.log(pows);
