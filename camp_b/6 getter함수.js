// setter getter 함수
// 객체 안에 설정할수 있는 함수이다.
// 특정값을 바꾸려고 하거나, 특정값을 참조하려고 할때 원하는 코드를 실행할수 있게 하는 함수이다.
//  1. getter 함수
//      - 함수 이름 앞에 get 이라고 적어야 한다. 그리고 함수 선언식으로 만들면 된다.
//      - 특정값을 참조하면 특정 코드를 실행시키고 연산된 리턴값을 반환받아서 사용한다. 
//      - 어떤 값을 무조건 반환해줘야 한다. 
//          - 예시: 
            const numbers = {
                a: 1,
                b: 2,
                get sum() {
                    console.log('sum함수가 실행됩니다');
                    return this.a + this.b
                        }
            }
            // numbers.a = 5;
            // console.log(numbers.a); // 5 <- 프로퍼티 값 갱신
            // console.log(numbers); // { a: 5, b: 2 }
 
            console.log(numbers.sum); // <- 함수이름을 참조만 했을 뿐인데 함수가 실행된다.  
            // sum함수가 실행됩니다
            // 3
            numbers.b = 5; // <- 프로퍼티 값 갱신
            console.log(numbers.sum); // <- 함수가 한번더 호출되면, 갱신이 된 값을 포함한 새로운 함수가 실행된다
            //                          (함수이름을 참조만 했을 뿐인데 함수가 실행된다.)  




