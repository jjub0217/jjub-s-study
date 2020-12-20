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
        - class 를 작성하지 않고도 state 와 다른 React의 기능들을 사용할수 있게 해준다. 
    - < Hooks 이전의 컴포넌트 만드는 법 >
        - 컴포넌트 내부에 상태가 있다면? : class 키워드 사용
        - 컴포넌트 내부에 상태가 없다면? 
            - 라이프사이틀을 사용해야 한다면? : class 키워드 사용
            - 라이프사이클에 관계 없다면? : function 키워드 사용
    - <ClassComponent Hooks 이후의 컴포넌트 만드는 법 >
        - class 키워드 사용 ──────┐
        - function 키워드 사용 ───┴─── 둘중에 뭘 써야 하나요? -> function 키워드 사용하자.
                                        └ class 와 function 사용은 사바사이다. 
                                        └ 요즘 트랜드는 function 이다. 
    1. class 키워드로 컴포넌트 만드는 법*/
    
        import React from 'react';

        class ClassComponent extends React.Component {
            render () {
                return (<div>hello</div>)

            }
        }

        <ClassComponent/>
    


    


