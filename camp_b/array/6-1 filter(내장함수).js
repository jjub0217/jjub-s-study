// 특정조건을 만족하는 요소를 찾아서, 그 요소들을 가지고 새로운 배열을 생성
// 특정배열에서 특정조건을 만족하는 요소들만 추출해서 새로운 배열을 생성 


// gender 값이 female 인것만 추출해라 
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


const woman = doichang.filter(member => member.gender === 'female'); 
console.log(woman); 
/* [
  { name: '정세영', shool: 'front-end', gender: 'female' },
  { name: '강주현', shool: 'front-end', gender: 'female' }
]
*/

const man = doichang.filter(member => member.gender === 'male');
console.log(man);
/*
[
  { name: '박상언', shool: 'front-end', gender: 'male' },
  { name: '김용민', shool: 'front-end', gender: 'male' }
]
*/