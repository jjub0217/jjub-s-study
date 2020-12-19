//  << React 라이브러리 >>
/*  
//  < 리액트 사용 >
- 라이브러리를 사용할수 있는 방법 
    1. 라이브러리를 링크로 처리 (링크를 파일 로컬에 위치)
    2. 컨텐츠가 빠르게 제공되는 네트워크 서비스를 이용 (CDN 사용)
- CDN 을 통해 리액트 라이브러리인 React, React-DOM 을 사용
- CDN : content를 제공하기 위해서(Delivery 하기 위해서) 만들어놓은 Network
- what-is-react  폴더에서 작성 
    1. npm init -y : 너 플젝 이름 뭐로 할래, 어써 누구야? 라는 너의 질문에 다 yes 라고 대답할거야
    2. package.json 파일 생성됨
    3. 서버를 띄우기 위해서 웹서버를 파인서버로 쉽게 띄울수 있는 라이브러리를 사용해보자
    4. npm install serve -D : 서브라고 하는 걸 개발용으로 사용하겠다. 
        - package.json 파일 제일 하단에  "devDependencies": { "serve": "^11.3.2"}" 라고 달리게 됨
    5. package-lock.json 파일과 node_modules 폴더가 생성됨
    6. serve 는 명령어로 실행가능하게 됨( 실행 명령어가, node_modules/.bin/serve 에 저장되어있음 )
    7.  두가지 방법 
        1. node_modules/.bin/serve 
        2. npx serve ( npx : npm 이랑 같이 설치되는 명령어 )
    8. src 폴더 생성
    9. index.html 파일 생성 -> <h1>hello</h1> 기입
    10. npx serve src : serve 의 src 를 실행 -> local:5000 새로고침 -> hello 텍스트 보임 
    11. 이제 CDN을 통해서 리액트 라이브러리 사용해보자 
    12. local:5000 새로고침 -> 변화된게 없어야 한다.  
    13. index.html 에 script 태그 삽입 -> console.log(ReactDOM); console.log(React); 
        -> 개발자도구 -> Object 2개 출력되어있을 것임.
    14. 이제 index.html 에서 ReactDOM 을 이용해서 랜더를 해보자.
    */ 

    




                        













   // 12시 ~ 7시간 수요일 수업꺼 -> 목요일 (1시 안으로 끝내자)

   // 12시 ~ 6시간 금요일 수업꺼 -> 금요일 
   // 12시 ~ 7시간 월요일 수업꺼 -> 토요일
   // 12시 ~ 7시간 화요일 수업꺼 -> 일요일
   // 12시 ~ 6시간 수요일 수업꺼 -> 월요일
   // 12시 ~ 6시간 금요일 수업꺼 -> 화요일