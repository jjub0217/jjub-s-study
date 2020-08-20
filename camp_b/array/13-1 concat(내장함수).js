
const buamdong = ['강주현', '정세영', '박상언', '김용민'];
const guri = ['임영서', '조윤아', '김동찬'];

// const friDay = buamdong.concat(guri);
// console.log(friDay);
// ['강주현', '정세영', '박상언', '김용민', '임영서', '조윤아', '김동찬' ]

// ┌바로 위의 concat 내장함수 대신, 스프레드문법을 사용하여 구현해낼수도 있다.
const friDay = [...buamdong, ...guri];
console.log(friDay);
// ['강주현', '정세영', '박상언', '김용민', '임영서', '조윤아', '김동찬' ]
