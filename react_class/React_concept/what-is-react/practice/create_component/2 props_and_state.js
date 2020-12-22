// << Props 와 State >>
/* 
- 기존에 그려졌던 props 나 state 의 변경이 발생하면, 랜더를 다시 할수 있다. (랜더함수가 다시 호출된다.)

< Props >
   - 컴포넌트 외부에서 컴포넌트에게 주는 데이터
   - 외부에서 내가 지은 태그에 뭔가 데이터를 넣을때, 사용하는 것
   - html 에서는 어트리뷰트(속성)같은것 (예시: html 에서는 src => react 애서는 props) 
      - 예시1: <Component/> => {}
      - 에시2: <Component>자식</Component> => {children : "자식"}
      - 에시3: <Component name="준호">아이돌</Component> => {children : "아이돌", name: "준호"}
      - 에시4: <Component name="준호" age={31}>아이돌</Component> 
                  => {children : "아이돌", name: "준호", age: 31}
   - props 가 변경된다는 것은, 어떠한 이유에 의해서 예를들면, 
      기존의 <Component/> 를 -> <Component name="요섭"/> 으로 바뀌게 하는 것이다.
    - props 를 변경시키는 방법들 중 꼼수는, setTimeout 함수를 사용하는 것이다. 
   - function 키워드로 컴포넌트 만드는 경우의 props 사용법
      
      function Component({children, name}) {

        return (
            <div> 
                <h1 style={h1Style}>함수 컴포넌트</h1> 
                {name !== undefined && <h2 style={h2Style}>{name}</h2>}
                {children !== undefined && <p>children : {children}</p>} 
            </div>
            )
    }
      // Object / Object{children: '준호'} / Object{children: '준호', 'name': 아이돌}

      ReactDOM.render(                                                          
        <div>                                                                
        <Component/>                                                        
        <Component>준호</Component>                                      
        <Component name="idol">준호</Component>                          
    </div>,                                                               
    document.querySelector('#root')                              
    )                                                                 


    setTimeout( () => {  
      ReactDOM.render(                          
         <div>                          
            <Component name="요섭"/>                                            
            <Component>준호</Component>                                         
            <Component name="idol">준호</Component>                          
         </div>,                                   
         document.querySelector('#root')
               )                                     
            }, 2000                                       
         )



/*< State >
   - 컴포넌트 내부에서 변경할 수 있는 데이터 (예시: a: 1 -> a: 2) 











*/
















// 45
// 1시간 15분 ~ 2시간 5분  
// 2시간 15분 ~ 3시간 7분 

// 20분 2시간 
// 13시간???????????????????????????????????

// 12시 ~ 7시간 수요일 수업꺼 -> 월요일

// 12시 ~ 6시간 금요일 수업꺼 -> 화요일 
// 12시 ~ 7시간 월요일 수업꺼 -> 수요일
// 12시 ~ 7시간 화요일 수업꺼 -> 목요일
// 12시 ~ 6시간 수요일 수업꺼 -> 금요일
// 12시 ~ 6시간 금요일 수업꺼 -> 토요일