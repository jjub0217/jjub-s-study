// < findIndex 내장함수 >
//   - indexOf 함수와 비슷하다
//   - 배열 내부의 요소가 '문자열' 이 아닌 다른 데이터 타입의 값의 인덱스를 찾거나
//     어떤 조건으로 찾을때 사용
//   - findIndex 안에 들어가는 매개변수는 함수가 들어간다.
//   - 특정 조건을 확인해서 그 조건이 일치한다면 일치하는 요소가 몇번째인지 알려준다.
//   - findIndex 내부에 함수를 넣어서 특정값을 특정조건으로 찾아서 그게 
//     몇번째인지 알려준다. 
//   - 특정조건에 만족하는 인덱스를 찾으면 거기서 끝난다.
//     특정조건에 만족하는것이 여러개여도, 제일 처음으로 만족하는 요소를 찾으면 
//     거기서 끝난다. 




const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
]

// id가 3인것을 찾는다면?

// const index = todos.indexOf(3);
// console.log(index); // -1  <- 일치하는게 없다는 의미의 -1 이 나온다. 
// //  <- indexOf 는 이때는 사용할수 없다. 

const index = todos.findIndex(todo => todo.id === 3) // <- findIndex 안에 들어가는 매개변수는 함수가 들어간다.
                                //  특정 조건을 확인해서 그 조건이 일치한다면 일치하는 요소가 몇번째인지 알려준다.
console.log(index); // 2 <- 인덱스 2 번째 요소의 id가 3 이다 

/////////////////////////////////////////////////////////////////




// find 내장함수
const index2 = todos.find(todo => todo.id === 3);
console.log(index2); // { id: 3, text: '객체와 배열 배우기', done: true }
                    // <- id 가 3인 요소 전체를 출력해라. (찾은 특정 값 자체를 출력)
const index3 = todos.find(todo => todo.done === false);
console.log(index3); // { id: 4, text: '배열 내장함수 배우기', done: false }
                    // <- done 이라는 프로퍼티의 값이 false 인 요소 전체를 출력해라. 