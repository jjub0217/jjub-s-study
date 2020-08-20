// < findIndex 내장함수 >
//      - indexOf 함수와 비슷하다
//      - 배열 내부의 요소가 '문자열' 이 아닌 다른 데이터 타입의 값의 인덱스를 찾거나
//        어떤 조건으로 찾을때 사용
//      - findIndex 안에 들어가는 매개변수는 함수가 들어간다.
//      - 특정 조건을 확인해서 그 조건이 일치한다면 일치하는 요소가 몇번째인지 알려준다.
//      - findIndex 내부에 함수를 넣어서 특정값을 특정조건으로 찾아서 그게 
//        몇번째인지 알려준다. 




const doichang = [
    {
        name: '박상언',
        shool: 'front-end',
        gender: 'male'
    },
    {
        name: '김용민',
        shool: 'front-end',
        gender: 'male'
    },
    {
        name: '정세영',
        shool: 'front-end',
        gender: 'female'
    },
    {
        name: '강주현',
        shool: 'front-end',
        gender: 'female'
    }
]

// 성별이 여자인 것의 인덱스를 찾는다면?
const woman = doichang.findIndex(member => member.gender === 'female')
console.log(woman); // 2
// └> 특정조건에 만족하는 인덱스를 찾으면 거기서 끝난다.
//    특정조건에 만족하는것이 여러개여도, 제일 처음으로 만족하는 요소를 찾으면 
//    거기서 끝난다. 


// find 내장함수 (특정조건에 만족하는 요소 전체를 찾는 함수)
const woman2 = doichang.find(member => member.gender === 'female');
console.log(woman2); // { name: '정세영', shool: 'front-end', gender: 'female' }
// └> 특정조건에 만족하는 인덱스를 찾으면 거기서 끝난다.
//    특정조건에 만족하는것이 여러개여도, 제일 처음으로 만족하는 요소를 찾으면 
//    거기서 끝난다. 