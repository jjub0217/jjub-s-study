// 원하는 위치의 요소를 삭제하거나, 추가하는 함수
// 배열의 중간 부분에 요소를 추가하거나, 삭제할때 사용하는 함수
// 또는, 한꺼번에 2애 이상의 요소를 추가하거나, 삭제할때 사용하는 함수
// 변수에 할당하게 되면, 제거하고 남은 배열을 반환한다. 
// 원본 배열이 변경되어 새로운 배열을 반환한다. 
// 매개변수가 1개일 경우 : 해당 인덱스 차례부터 끝까지 삭제
//           2개일 경우 : 제거하기 시작하는 인덱스 차례, 제거하려는 요소 개수,
//           3개일 경우 : 제거하기 시작하는 인덱스 차례, 제거하려는 요소 개수,
//                        ,새로 추가 삽입하려는 요소 값


// 매개변수가 1개일 경우

let numbers = [0, 1, 2, 3, 4, 5];
numbers.splice(2); // <- 2번째 인덱스 요소부터 끝까지 삭제
console.log(numbers);
//[0, 1]
let num = numbers.splice(2);
console.log(num); // [2, 3, 4, 5]

/////////////////////////////////////////////////////////////////


// 매개변수가 2개일 경우

let study = ['html', 'css', 'web', 'javascript']
// study.splice(2,1);
// console.log(study); // [ 'html', 'css', 'javascript' ]


///////////////////////////////////////////////////////////////

// 매개변수가 3개일 경우

study.splice(2, 1, "react");
console.log(study); // ['html', 'css', 'react', 'javascript' ]


////////////////////////////////////////////////////////////////////

// study 배열에서 'css' 요소 다음에 'web' 을 추가해보세요

study.splice(1, 0, 'web');
console.log(study); // ['html', 'css', 'css', 'react', 'javascript' ]


// splice 함수를 사용해서 js=['jquery','javascript'] 배열의 끝에 
// 'typescript' 와 'angular' 를 추가해보세요

let js = ['jquery', 'javascript']
js.splice(2,0,'typescript', 'angular');
console.log(js);