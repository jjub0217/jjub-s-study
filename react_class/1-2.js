// << React concept >>
// < keyword >
/*
- 앵귤러 vs 리액트 vs 뷰
- 뷰를 다루는 라이브러리
    - 라이브러리와 프레임워크의 차이점
        - 라이브러리 : 컨트롤비트 내가 너를 컨트롤 할거야
        - 프레임워크 : 너가 나를 컨트롤 할수 없어 나는 내가 선택할거야
- only 랜더링(브라우저에 그리기) & 업데이트(브라우저에 다시 그리기)
    - not include another functionally (ex, http client, ...)
- 컴포넌트 베이스 development 
    - 컴포넌트 : 동적 라이브러리 같은 개념
    - 리액트 세계에서의 컴포넌트 
        - 웹 이라는 플랫폼 안에서의 view port 
        - 독립적인 코드 블럭 ( HTML + CSS + Javascript )
        - 작업의 단위
- virtual DOM
    - 이제는 DOM 을 직접 다루지 않음.
- JSX     
    - 자바스크립트를 확장한 문법
    - not templates (템플릿 언어가 아니다) : HTML 로 파싱되는 것이 아니다.
    - transpile to JS ( 바벨, 타입스크립트 ) : 머지 시키는 행위 중간에 바벨이나 타입스크립트가 자바스크립트로 트랜스파일링 해준다.
- 컴포넌트가 아닌거 
    - ex: <img src="이미지 주소">
          <button class="이름">버튼</button>
- 컴포넌트인거
    - html 의 어트리뷰트 같이 생긴거 ( ex: html 에서는 src => react 에서는 name)
        - 어트리뷰트가 아니라 prop 이라고 한다. 
    - ex: < idol name = "준호"> : 태그 안에 name 을 마크라고 지은것.
          < idol prop = (false)>준호< /idol>  : 준호 => children 이라고 한다.
    */ 

