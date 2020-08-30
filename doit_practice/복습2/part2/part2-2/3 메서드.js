/* 메서드
        - 객체가 어떻게 동작할지를 선언해 놓는 함수
        - 객체 내부에 정의횐 함수를 말한다. 
        - 함수로 이루어진 프로퍼티를 메서드라고 한다.  
        - 객체의 메서드인 프로퍼티 키에 접근하면 해당 함수인 메서드가 호출된다.*/
//      - 예시:
        const fds17 = {
            name: '강주현',
            gender: 'female',
            age: 33,
            sayHi: function(){
                    console.log('Hello');
            },
            saySubject(){
                    console.log('front-end');
            }
        }
/*          sayHi: function(){
              console.log('Hello');
             } 
                   => 메서드
            saySubject(){
              console.log('front-end');
            }
                   => 메서드 */
        fds17.sayHi(); // Hello
        fds17.saySubject(); // front-end