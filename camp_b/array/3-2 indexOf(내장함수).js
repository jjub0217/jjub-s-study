// 객체배열들을 텍스트로만 이루어진 문자열 배열로 바꿔라.

const items = [{
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
]

const texts = items.map(item => item.text);
console.log(texts); // [ 'hello', 'bye']

///////////////////////////////////////////////////////////////

const dabangPeople = {
    subject: 'front-end',
    people: 5,
    member: ['임영서', '김동찬', '박상언', '정세영', '강주현'],
    male: [{
            number: 3
        },
        {
            name: '임영서',
            gender: 'male',
            age: 26
        },
        {
            name: '김동찬',
            gender: 'male',
            age: 28
        },
        {
            name: '박상언',
            gender: 'male',
            age: 29
        }
    ],
    female: 2
}


const males = dabangPeople.male.map(maleAges => maleAges.age);
console.log(males); // [ undefined, 26, 28, 29 ]
console.log(dabangPeople.member[3]); // 정세영



