// << React Component 만드는 법 >>
/* 
- 너 리액트 잘 해? = 너 리액트 컴포넌트를 써서 웹 서비스 잘 만드니?
                 = 리액트를 이용해서 웹 서비스를 잘 구현할수 있습니까? 
    └   웹 서비스를 잘 만들기 위한 도구 : 리액트
        리액트 : view 만 다루는 거기때문에, 리액트를 잘하는 것은 웹 서비스의 본질 중에 많은 것을 놓치는 것.
        리액트 라이브러리 배우는건 쉬워. 
        리액트 어려워요 = 리액트를 이용해서 웹 서비스를 구현하는게 만만치 않은거구나~
- 너 앵귤러 잘 해? = 웹 서비스 잘 만들어?
                  = 앵귤러 안에 다 있는 라이브러리다.  

< Hooks >
    - "Hooks" 
        - React에 새로 추가된 기능 
        - class 를 작성하지 않고도(functional 컴포넌트에서) state 와 다른 React의 기능들을 사용할수 있게 해준다. 
    - < Hooks 이전의 컴포넌트 만드는 법 >
        - 컴포넌트 내부에 상태(state)가 있다면? : class 키워드 사용
        - 컴포넌트 내부에 상태(state)가 없다면? 
            - 라이프사이클이 있다면? : class 키워드 사용
            - 라이프사이클이 없다면? : function 키워드 사용
    - <Hooks 이후의 컴포넌트 만드는 법 >
        - class 키워드 사용 ──────┐
        - function 키워드 사용 ───┴─── 둘중에 뭘 써야 하나요? -> function 키워드 사용하자.
                                        └ class 와 function 사용은 사바사이다. 
                                        └ 요즘 트랜드는 function 이다. 
    1. class 키워드로 컴포넌트 만드는 법
        - 클래스 함수 내부에 랜더함수와, 랜더함수에 내부에 리턴값이 반드시 있어야 한다. 
        - class 키워드로 만든 컴포넌트(이하, 클래스 컴포넌트) 내부의 this = 클래스 컴포넌트의 인스턴스
          (클래스 컴포넌트 내부에는 인스턴스가 존재한다.)
        - 랜더 함수 내부에 createElement 가 들어거야 하는 것이 정해진 형식인데,
        createElement 쓰기 복잡하니까 JSX 를 쓰자. 
        - 클래스 컴포넌트는, 원래 javascript 의 class 이기 때문에, new (클래스이름)(); 해야 class 함수가 실행되는 것이지만, 
          React 라이브러리를 사용하면, new 키워드를 사용하지 않아도 인스턴스가 생성되며 class 함수가 실행되는 것이다.  

        import React from 'react';
        class (내가 만드는 컴포넌트 이름) extends React.Component
        class classComponent extends React.Component {
            render(){
                return (
                    <div>
                        <h1>클래스컴포넌트</h1>
                    </div>
                );
            }
        }

        ReactDOM.render(
            <classComponent/>,//<- classComponent 라는 이름의 class 함수 실행  

            document.querySelector('#root') 
        )

    2. function 키워드로 컴포넌트 만드는 법
        - 일반 함수 내부에 랜더함수 없어도 된다. 하지만 리턴값은 반드시 있어야 한다. 
        - function 키워드로 만든 컴포넌트(이하, 함수 컴포넌트) 내부에는 this가 존재하지 않는다.  
          함수 컴포넌트의 내부에는 인스턴스가 존재하지 않기 때문이다.  
          (클래스 컴포넌트 내부에는 인스턴스가 존재한다.)
        import React from 'react';

        // 방법1
        function FunctionalComponent() {

            return (
            <div> 
                <h1>함수컴포넌트</h1>
            </div>
            )
        }

        // 방법2
        const FunctionalComponent = () => {
            return <div>hello</div>
        }

        <FunctionalComponent/>//<- FunctionalComponent 라는 이름의 class 함수 실행        */