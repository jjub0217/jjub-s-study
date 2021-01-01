// << State  >>
/* 
- 기존에 그려졌던 props 나 state 의 변경이 발생하면, 랜더를 다시 할수 있다. (랜더함수가 다시 호출된다.)
  즉, render 함수를 동작하게끔 하는 것은 props 나 state 의 변경이다.
- Hooks 
   - class 컴포넌트 아니어도(functional 컴포넌트에서) 
     state 와 다른 React의 기능들을 사용할수 있게 해준다. 
   - functional 컴포넌트에는 state가 없기 때문에, 
     Hooks를 사용하지 않으면, state 를 함수 컴포넌트 내부에서 사용할수 없게 된다.
     하지만, Hooks를 사용하면 함수 컴포넌트 내부에서도 state를 사용할수 있게 된다.

< State >
   - 컴포넌트 내부에서 변경할 수 있는 데이터 (예시: a: 1 -> a: 2) 
   - setState 메소드를 써야만 state 값을, 기존에서 변경될 상태로 변경할수 있다. 
   - 일반함수 안에서는 
   - Class 컴포넌트 내부의 State를 사용하는 방법(Class 컴포넌트 안에는 State가 있으니까)
      - State 초기값 설정
         1. state = {};
            - Class 컴포넌트 내부에서 초기설정한 State 사용 (this.state.프로퍼티키 로 접근 )
                  class (내가 만드는 컴포넌트 이름) extends React.Component
                  class ClassComponent extends React.Component { // <- virtual DOM 의 형태를 만든것
                  
                     state = { 
                        count: 1, 
                        name: "개명전"
                     }

                     render(){

                        const {children, name} = this.props; 
                        const {count} = this.state;

                        return (                                                           
                           <div>                                                        
                              <h1 style={h1Style}>클래스컴포넌트</h1>                       
                              <h2 style={h2Style}>{name}</h2>                               
                              <p>children : {children}</p>                                
                              <p>count: {count}                                           
                                    <button onClick={this.click}>+</button>             
                              </p>
                              // └> + 를 누르면 count 값을 바꿔보자 h─────────────────────────────────────────────────────┐
                              <div style={border}>                                                                       │
                                 <FunctionComponent name={this.state.name}/>                                             │
                                 // └> name 은 원래 state의 값인 "개명전" / children 은 없으므로 디폴트값인 "Hanna" 로 됨  │   
                                 <FunctionComponent>자식</FunctionComponent>                                             │   ───>>> 함수 컴포넌트의 props 를      
                                 // └> name 은 없으므로 디폴트값인 "Hanna"로 됨 / children 은 현재 children 값인 "자식"    │          바꿔주고 있는것은,                                         
                                 <FunctionComponent name="준호">자식</FunctionComponent>                                  │          함수 컴포넌트의 부모인,   
                                 // └> name 은 현재 name 값인 "준호"로 됨 / children 은 현재 children 값인 "자식"          │         클래스 컴포넌트의 state가 
                                 //                                                                                      │         바꿔주고 있다.            
                              </div>//                                                                                   │
                           </div>//                                                                                      │                    
                        );//                                                                                             │
                     }//                                                                                                 │
                  }//                                                                                                    │
               //                                                                                                        │
                     click = () => { //                                                                                  │
                        console.log('클릭했음');//                                                                       │
                        // ┌ 여기서 state 를 변경해보자  ─────────────────────────────────────────────────────────────────┘
                        // this.state.count = this.state.count + 1; // <- mutate 한다 라고 한다. (이렇게 하지 마라)
                        /* 상태의 변경 : 이전 상태가 새로운 상태로 변경 -> 상태가 바뀌었으니 랜더 함수를 다시 호출해라 
                                       이전 상태 -> 새로운 상태로 갈때 어떤 부분이 바뀌엇는지를 일일히 체크할수 없다. 
                                       그래서 바로 아래 코드처럼 명시적으로 상태가 바뀐다는 것을 개발자가 리액트에게 알려줘야 한다.*//*
                        this.setState({count : this.state.count + 1}); // <-------------┬---상태가 바뀌었으니 랜더 함수를 다시 호출해라
                        if(this.state.count > 10) this.setState({name: '개명함'});// ---┘
                        /* └> setState 함수 내부에, 새로운 상태를 넣으면 된다.  
                        ("리액트야, 새로운 상태가 이거니까, 이걸로 다시 랜더함수를 호출하렴")*//*
                     }
                           
                  function FunctionComponent({children, name}) {
                  
                  return (
                     <div> 
                        <h1 style={h1Style}>함수 컴포넌트</h1> 
                        {name !== undefined && <h2 style={h2Style}>{name}</h2>}
                        {children !== undefined && <p>children : {children}</p>} 
                        </div>
                        )
                     }


         2. constructor
                  class Component extends React.Component { // <- virtual DOM 의 형태를 만든것
         
                     constructor(props){                                                                                                
                        super(props); // <- 상속받아서 생성자를 사용할 때 기입 (React.Component 의 생성자)                                   
                        console.log(props);                                                                                               
                        this.state = {                                                                                                 
                           count: 1,                                                                                                     
                           name: '개명전'                                                                                                
                        }                                                                                                  
                     }                                                                                                                  

                     render(){

                        const {children, name} = this.props; 
                        const {count} = this.state;

                        return (                                                           
                           <div>                                                        
                              <h1 style={h1Style}>클래스컴포넌트</h1>                       
                              <h2 style={h2Style}>{name}</h2>                               
                              <p>children : {children}</p>                                
                              <p>count: {count}                                           
                                    <button onClick={this.click}>+</button>             
                              </p>
                              // └> + 를 누르면 count 값을 바꿔보자 h─────────────────────────────────────────────────────┐
                              <div style={border}>                                                                       │
                                 <FunctionComponent name={this.state.name}/>                                             │
                                 // └> name 은 원래 state의 값인 "개명전" / children 은 없으므로 디폴트값인 "Hanna" 로 됨  │   
                                 <FunctionComponent>자식</FunctionComponent>                                             │   ───>>> 함수 컴포넌트의 props 를      
                                 // └> name 은 없으므로 디폴트값인 "Hanna"로 됨 / children 은 현재 children 값인 "자식"    │          바꿔주고 있는것은,                                         
                                 <FunctionComponent name="준호">자식</FunctionComponent>                                  │          함수 컴포넌트의 부모인,   
                                 // └> name 은 현재 name 값인 "준호"로 됨 / children 은 현재 children 값인 "자식"          │         클래스 컴포넌트의 state가 
                                 //                                                                                      │         바꿔주고 있다.            
                              </div>//                                                                                   │
                           </div>//                                                                                      │                    
                        );//                                                                                             │
                     }//                                                                                                 │
                  }//                                                                                                    │
               //                                                                                                        │
                     click = () => { //                                                                                  │
                        console.log('클릭했음');//                                                                       │
                        // ┌ 여기서 state 를 변경해보자  ─────────────────────────────────────────────────────────────────┘
                        // this.state.count = this.state.count + 1; // <- mutate 한다 라고 한다. (이렇게 하지 마라)
                        /* 상태의 변경 : 이전 상태가 새로운 상태로 변경 -> 상태가 바뀌었으니 랜더 함수를 다시 호출해라 
                                       이전 상태 -> 새로운 상태로 갈때 어떤 부분이 바뀌엇는지를 일일히 체크할수 없다. 
                                       그래서 바로 아래 코드처럼 명시적으로 상태가 바뀐다는 것을 개발자가 리액트에게 알려줘야 한다.*//*
                        this.setState({count : this.state.count + 1}); // <-------------┬---상태가 바뀌었으니 랜더 함수를 다시 호출해라
                        if(this.state.count > 10) this.setState({name: '개명함'});// ---┘
                        /* └> setState 함수 내부에, 새로운 상태를 넣으면 된다.  
                        ("리액트야, 새로운 상태가 이거니까, 이걸로 다시 랜더함수를 호출하렴")*//*
                     }
                           
                  function FunctionComponent({children, name}) {
                  
                  return (
                     <div> 
                        <h1 style={h1Style}>함수 컴포넌트</h1> 
                        {name !== undefined && <h2 style={h2Style}>{name}</h2>}
                        {children !== undefined && <p>children : {children}</p>} 
                        </div>
                        )
                     }
   2. state 값 업데이트
      - this.setState({프로퍼티키 : '바꿀 스테이트 값'})
      1. 객체를 새로 할당 : 이전 stage 를 사용하지 않을 경우 
         click = () => {                                                                                       
            console.log('클릭했음', this.state.count );                                                       
            // ┌ 여기서 state 를 업데이트해보자 
            this.setState({count: this.state.count + 1}) // 기존의 state 를 가져와서 -> 추가 작업을 하고 -> 그 값을 setState에 전달한다. -> 귀찮아
            //                      ↓ (업데이트 : 형태가 정해져있다. )
            this.setState((state)=>({count: state.count + 1})) // <- 이 함수는 이전 state 를 인수로 받고, 새 state 를 리턴해야 한다.
         }
      2. 함수를 할당 : 이전 state 를 사용할 경우 
         click = () => {//                                                                                       │
            console.log('클릭했음', this.state.count );//                                                       │
            // ┌ 여기서 state 를 업데이트해보자  ────────────────────────────────────────────────────────────────┘
            this.setState(({count})=>({count: count + 1})) // <- 이 함수는 이전 state 를 인수로 받고, 새 state 를 리턴해야 한다.
        }
*/
















// 19분 일때 : 46
// 23분 일때 : 42
// 28분 일때 : 37
// 41분 일때 : 24
// 46분 일때 : 19
// 50분 일때 : 15
// 60분 일때 : 5
// 1시간 15분 ~ 2시간 5분  
// 2시간 15분 ~ 3시간 7분 

// 20분 2시간 
// 13시간???????????????????????????????????

// 12시 ~ 7시간 9일 수요일 수업꺼 -> 22 화요일 3일치를 2주일 걸려서...

// 12시 ~ 6시간 11일 금요일 수업꺼 -> 23 수요일 
// 12시 ~ 7시간 14일 월요일 수업꺼 -> 24 목요일
// 12시 ~ 7시간 15일 화요일 수업꺼 -> 25 금요일   // 1월 5일
// 12시 ~ 6시간 16일 수요일 수업꺼 -> 26 토요일   
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일
// 12시 ~ 6시간 21일 금요일 수업꺼 -> 28 월요일 // 1월 19일 
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일
