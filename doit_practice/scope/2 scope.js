/* 블록 레벨 스코프
        - 블록 레벨 변수 : 
            변수를 선언한 블록 내부에서만 변수의 생명이 살아 있고, 
            블록을 벗어나면 죽어서 무효화 되는 범위 내의 변수
            ( 블록 내부에서 let 키워드를 사용하여 선언한 변수 )
*/

function add(a, b) {
    let boyFriend1 = '세진'
    if(a){
        let boyFriend2 = '요섭'
        console.log(`내 남자친구 이름은 ${boyFriend2}입니다`); 
        // 내 남자 친구 이름은 요섭입니다.
    }
    console.log(`내 남자친구 이름은 ${boyFriend1}입니다`);
    // 내 남자친구 이름은 세진입니다
    console.log(`내 남자친구 이름은 ${boyFriend2}입니다`); // Reference Error
    // <- boyFriend2 는 블록 레벨 변수이기 때문에 if 문의 블록문 바깥에서는
    //    참조가 불가능하다. 
}
add(1, 2);
