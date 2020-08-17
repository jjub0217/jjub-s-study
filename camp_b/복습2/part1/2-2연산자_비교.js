
// 연산자 : 특정 연산을 할때 사용하는 문자
//      2. 비교 연산자
//          a. true 
//          b. false
//          c. NOT ( ! ) : 논리값(true 혹은 false)을 반전 시켜준다. 

// 두 값을 비교할때 사용
// 1. === (값과 데이터 타입이 동시에 같은지 틀린지 비교)

const a = 1;
const b = 1;
const c = 2;
const equals1 = a === b;
const equals2 = a === c;
console.log(equals1);    // true
console.log(equals2);    // false

// 2. !== (값과 데이터 타입이 동시에 같은지 틀린지 비교)

const e = '1';  // <- 데이터 타입 : string 
const d = 1;    // <- 데이터 타입 : number
const equals3 = e === d; // e 와 d 가 값과 데이터 타입이 '같으냐'?
console.log(equals3);   // false <- 서로 데이터 타입이 다르기 때문에 
const equals4 = e !== d; // e 와 d 가 값과 데이터 타입이 '다르냐'?
console.log(equals4);   // true <- 서로 데이 터입이 다른게 맞기 때문에 

// 3. < / > / >= / <= (값의 크기가 어떤 값이 큰지 비교)

const f = 10;
const g = 15;
console.log(f < g); // true
console.log(g > f); // true
console.log(f <= g); // true
console.log(g >= f); // true

// 4. + : 문자열 연결 연산자
//      - 문자 + 숫자 = 문자
//      - 문자 - 숫자 = 숫자
//             *     = 숫자
//             /     = 숫자
//             %     = (나머지를 구할 때)숫자

const h = '안녕';
const i = '하세요';
const j = h + i;
console.log(j); // 안녕하세요
// console.log(h + i);  // 안녕하세요
console.log(typeof h); // string
console.log(typeof i); // string
console.log(typeof j); // string

