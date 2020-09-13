// 주어진 값에 따라 다른 결과물을 반환해야 하는 상황에 사용

//  방법1
// function getSound(animal){
//     if(animal === '개'){
//         return '멍멍'
//     }
//     if(animal === '고양이'){
//         return '야옹'
//     }
//     if(animal === '참새'){
//         return '짹짹'
//     }
//     if(animal === '비둘기'){
//         return '구구 구 구 '
//     }
//     return '...?'
// }
// console.log(getSound('개')); // 멍멍
// console.log(getSound('비둘기')); // 멍멍
// console.log(getSound('인간')); // ....?


//  방법2
// function getSound(animal){
//     const sounds = {
//         개 : '멍멍',
//         고양이 : '야옹',
//         참새 : '짹짹',
//         비둘기 : '구구 구 구',
//     }
//     return sounds[animal] || '....?'
// }
// console.log(getSound('개'));
// console.log(getSound('비둘기'));
// console.log(getSound('인간'));

//  방법3
function makeSound(animal){
    const tasks = {
        개: () => {
            console.log('멍멍');
        },
        고양이(){
            console.log('야옹');
        },
        비둘기: function(){
            console.log('구구 구구 ');
        }
    }
    const task = tasks[animal]; // <- 매개변수를 통해 들어오는 animal이 프로퍼티 키가 된다. 
    if(!task){ // <- animal의 프로퍼티 키가 존재하지 않다면
        console.log('....?'); // <- 이걸 출력해라
        return // <- if 문 종료를 알리는 키워드
    }
    task();
}
makeSound('개');
makeSound('비둘기');
makeSound('인간');