// slice 내장함수
// 배열의 특정 요소만 잘라내는 함수
// 제거한 요소를 반환한다.
// 원본 배열은 변경되지 않는다.
/* 예시: numbers.slice(0,2);
        0 : 몇번재 인덱스의 요소부터 제거할지 
        2: 몇번째 인덱스의 요소전까지 제거할지
console.log(numbers); // [10,20,30,40] <- 원본 배열은 변경되지 않늗다.*/


const doichang = ['강주현', '김용민', '정세영', '원진솔', '박상언'];

const leaveMember = doichang.indexOf('박상언');
console.log(leaveMember); // 4 <- 4번째 인덱스의 요소 값 : 박상언

const afterDoichang = doichang.slice(4);
console.log(afterDoichang); // [박상언] 
//                             └> doichang 이란 배열에서 4번째 인덱스의  
//                                요소를 제거하고 싶은데, 그 제거하려는 값이
//                                '박상언' 이란 값이다. 



const female = [ { name: '강주현',age: 33},
    {name: '정세영',age: 33},
    {name: '원진솔',age: 33} ]

const male = [{ name: '김용민', age: 26},
    { name: '박상언', age: 29} ]


const buamdong = [ female, male ];

const leaveMembers = buamdong.slice(1);
console.log(leaveMembers); // [ [ { name: '김용민', age: 26 }, { name: '박상언', age: 29 } ] ]
