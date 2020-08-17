let elem = null; 
console.log(typeof elem); // object

let value = elem && elem.value; // <- value 에, null && null.value 를 할당 시킨것이다. 
                                // 논리곱 연산자는 둘다 true 여야 한다. 즉, 하나만 false 여도 false 값이 된다는 것이다. 
                                // 현재 elem 이 false 값을 가지고 있으므로 elem 의 값이 value 에 할당되게 된다. 
console.log(value);             // 그래서 value 를 콘솔로그 찍어보면 null 이 나오게 된다. 


