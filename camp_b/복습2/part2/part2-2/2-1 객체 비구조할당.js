// 객체 비구조할당(객체 구조분해) = 객체 디스트럭처링
//      - 객체에서 특정 값들을 추출해내는 것이다. 
//      - 객체의 프로퍼티키의 값을 매번 참조해야 했는데, 그러지 않고
//         객체 내부에서 그 안에 있는 값들을 밖으로 빼와서 프로퍼티 키와 
//          같은 이름의 변수에 할당 해준것이다.  



const fds17 = {
    name: 'kim',
    subject: 'front-end',
    age: 33,
    boyfriend: 'james'
}

function print1(person){
    const {name,age,boyfriend} = person;
    const sentence = `${boyfriend}라는 이쁜 남치니를 둔 저는 ${name}(${age})이라고 합니다.`
    console.log(sentence);
}
print1(fds17);

// 바로 위의 print 함수는 바로 아래의 print 함수처럼 코딩할수도 있다.
// 같은 함수이다. 

function print2({name,age,boyfriend}){
    const sentence = `${boyfriend}라는 귀요미 남치니를 둔 저는 ${name}(${age})이라고 합니다.`
    console.log(sentence);
}
print2(fds17);
