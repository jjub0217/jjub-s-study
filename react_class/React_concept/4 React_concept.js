//  << React 라이브러리 >>
/*  
< 리액트"가" 하는 일 >
- 리액트의 핵심 모듈 2개로 리액트가 하는 일 알아보기
- 리액트를 사용하려면 핵심 모듈 라이브러리 2개가 필요하다. 
- 리액트를 가지고 컴포넌트를 만드는 것이다. 
1. react-dom 이라고 하는 라이브러리
    - 페이지라는 큰 컴포넌트를 최초에 랜더링 해주는(그리는) 역할을 한다.  
    - 만든 컴포넌트를 실제로 돔에 그리는 역할
    - 메서드
        1. .render( )
            - 예시: ReactDOM.render( )
            - 가장 많이 쓰인다. 
            - 프로그램 진입을 의미하는 메인과 같은 역할을 하고 있다.  
            - 무엇을 그릴건지, 어디다 그릴건지를 구현해야 한다.  
            (예시.  무엇을 그릴건지 : <HelloMessage name = "준호"></HelloMessage>
                    어디다 그릴건지 : document.getElementById('hello-example')
                ); => html 요소에, 리액트 컴포넌트를 연결할때 React-DOM 을 사용한다. 
        2. .createPortal( )
        3. .hydrate( )
        4. .unmountComponentAtNode( )
        5. .findDOMNode( )
    1. 리액트 컴포넌트 > html 요소 연결하기
    - import ReactDOM from 'react-dom'
2.react 라고 하는 라이브러리
    - 리액트를 가지고 컴포넌트를 만드는 역할을 한다.
    - 리액트를 가지고 컴포넌트 만드는 API들 
            1. Hooks 
            2. lifeCycle

//  < 리액트 사용 >
- 라이브러리를 사용할수 있는 방법 
    1. 라이브러리를 링크로 처리 (링크를 파일 로컬에 위치)
    2. 컨텐츠가 빠르게 제공되는 네트워크 서비스를 이용 (CDN 사용)
- CDN 을 통해 리액트 라이브러리인 React, React-DOM 을 사용
- CDN : content를 제공하기 위해서(Delivery 하기 위해서) 만들어놓은 Network
- what-is-react  폴더에서 작성 */ 