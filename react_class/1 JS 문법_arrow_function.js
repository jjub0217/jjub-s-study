//리액트를 위한 JS의 문법정리
/*
1. const let
2. template string (템플릿 리터럴 )
3. arrow function ( 화살표 함수 )
4. .bind(this)
5. const {children} = this.props; ( 디스트럭처링 )
6. ...props (REST)
7. Promise
8. async await
9. Generator
*/

// < arrow function > : 화살표 함수
/*  1. 자신의 this를 만들지 않는다. 
        function Test() {
            this.name = 'Mark'; // <- 일반함수안에 this가 존재하고 있다. 
                                      Foo함수 안에 있는 this 는 new 연산자를 쓸때 나타난다.
            
            setTimeout(function () {
                console.log(this.name); // undefined : 여기서 this 는 전역객체를 의미한다. 
            }, 1000) // <- 일반함수를 인수로 사용

            setTimeout(() => {
                console.log(this.name); // Mark
            }, 1000) // <- 화살표함수를 인수로 사용 
                            : JS엔진은, 여기서 this 를 찾으려고 한다. 
                              하지만 화살표 함수 내부에서는 this가 존재하지 않는다. 
                              그렇기 때문에 자기보다 위에 있는 곳에서 this를 찾으려고 하는데, 
                              그 위에 있는 곳에 존재하고 있는 this가 'Mark'다.
            } 
            
            const foo = new Test(); // <- 위의 Test 함수 내부에 존재하고 있는 this 를 foo가 가리키고 있다.

    2. 생성자로 사용할수 없다.
        - this 를 만들지 않는데 어떻게 생성자로 쓸 수 있겠냐~?(그래서 new 연산자를 사용할수 없다)

    3. 항상 익명함수이다.
        - const test = ( ) => { } : 익명 화살표함수를 test 라는 변수에 할당하였다.
        - 익명 화살표함수를 변수에 대입해서 사용

    4. 리턴만 있으면 { } 생략가능
        - const test = ( ) => false // <- 가능
        - const result = ( ) => '리턴' // <- 가능
        - x => y => z => a => b => c => false
        // └> x 의 리턴값(함수) : y => z => a => b => c => false
              y의 리턴값(함수) : z => a => b => c => false
              ...

    5. 매개변수가 하나면 { }  생략가능
        - const test = result => { } // <- 가능
        - const fullName = props => `리턴 ${props}`; // ---┐
          console.log(fullName('프롭스') // ---------------┘ <- 가능 
*/
