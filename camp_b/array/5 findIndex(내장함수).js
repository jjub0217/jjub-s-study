// < findIndex 내장함수 >
//      - indexOf 함수와 비슷하다
//      - 배열 내부의 요소가 '문자열' 이 아닌 다른 데이터 타입의 값의 인덱스를 찾거나
//        어떤 조건으로 찾을때 사용




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

const index = todos.indexOf(3);
console.log(index); // -1  <- 일치하는게 없다는 의미의 -1 이 나온다. 
//  <- indexOf 는 이때는 사용할수 없다. 

const index = todos.findIndex() // <- findIndex 안에 들어가는 매개변수는 함수가 들어간다.
                                //  특정 조건을 확인해서 

