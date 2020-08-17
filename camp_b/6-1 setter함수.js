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

// 2. setter 함수
//      - 변수에 값을 집어넣는 함수 : setter
//          - 예시
            const dog = {
                _name: '멍멍이', // <- name 앞에 _ 를 붙인 이유: setter 함수랑 중복 프로퍼티 키가 안되도록. 
                set name(value){ // <- 파라미터를 반드시 넣어야 하고, 파라미터를 전달받았을때 _name 을 바꾸도록.
                    console.log(`이름이 바뀝니다.. ${value}`);
                    this._name = value;        
                }
            }
            console.log(dog._name); // 멍멍이

            dog.name = '뭉뭉이'; // '뭉뭉이' 라는 값이 위에 set 함수의 파라미터인 value 안에 전달이 되서, -> 코드블럭 안의 value 안으로 전달되고, 그 아래 코드의 value 에도 전달된다. 그리하여~
            console.log(dog._name); // 이름이 바뀝니다.. 뭉뭉이 / 뭉뭉이 <- 라는 값이 콘솔에 찍히게 된다.





