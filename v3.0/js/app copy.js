// State
// 자료구조를 배열로 만들기 위해 빈배열 생성
let todos = [];


// Doms 
const $todos = document.querySelector('.todos');
const $input = document.querySelector('input');
const $completeAllToggle = document.querySelector('.complete-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $completedNumber = document.querySelector('.completed-todos');
const $activeTodosNumber = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');
const $active = document.getElementById('active');


// todos에 필요한 가상 데이터
const fetchesTodo = () => {
    todos = [{id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true},
        { id: 3, content: 'Javascript', completed: false}
    ].sort((todo1, todo2) => todo2.id - todo1.id);

    render();
}

const render = () => {
    
    let tabMoveTodos = [...todos];// 기존 배열의 얕은 복사본
    
    const targetId = $nav.querySelector('.active').id;
    // console.log(targetId); // all 클릭이벤트 시: 'all' , Active 클릭이벤트시 : 'active'...

    if (targetId === 'completed') {
        tabMoveTodos = todos.filter(todo => todo.completed)
    }else if(targetId === 'active') {
        tabMoveTodos = todos.filter(todo => !todo.completed)
    }
    
    
    let html = '';
    tabMoveTodos.forEach(todo => {
        html += `<li id="${todo.id}" class="todo-item">
          <input id="ck-${todo.id}" class="checkbox" type="checkbox"
          ${todo.completed ? 'checked' : ""}>
          <label for="ck-${todo.id}">${todo.content}</label>
          <i class="remove-todo far fa-times-circle"></i>
        </li>`
    });

    $todos.innerHTML = html; // ul 안에 들어갈 내용들은 문자열이어야 한다. 
    // console.log(todos); // 기존배열
    // console.log($todos);// 기존 ul , li

    $input.value = '';// <- input 값 초기화

    $completedNumber.textContent = todos.filter(todo => todo.completed).length;
    $activeTodosNumber.textContent = todos.filter(todo => !todo.completed).length;
}
// └> 랜더링 될것이다.


// // 함수
// id의 최대값구하기 : 새로운 newTodo의 id 는 기존 배열의 id들 중에서 제일 큰것보다 1이 더 커야 한다.
// console.log(todos);// 빈 배열
// console.log($todos); // 기존 ul, li

function maxId() {
    const id = todos.map((todo) => todo.id)
    // console.log(id);// [ 3, 2, 1 ]
    const maxId = Math.max(...id) + 1;
    return maxId;
}


// newTodo + 기존 todos = 새로운 todos 배열 생성
const addTodo = (content) => { 

// newTodo + todos = todos 재할당시키면 됨. // concat or ...todos                                       
// id의 최대값 구하는 함수 포함시켜라. : 새로운 newTodo의 id 는 기존 배열의 id들 중에서 제일 큰것보다 1이 더 커야 한다.   
const newTodo = [{id: maxId(), content, completed: false }];
todos = newTodo.concat(todos);//                                                                                       
// console.log(todos);// newTodo 추가된 배열                                                                         
}

// li 제거하기 (x 버튼 누르기)
const removeTodo = (id)=> { // id : 클릭받은 li 의 id
    todos = todos.filter(todo => todo.id !== +id) // 원본배열은 변경되지 않는다.
    // 1 !== 2(타입변환 2) = true -> 남겨
    // 2 !== 2(타입변환 2) = false -> 제거
    // 3 !== 2(타입변환 2) = true -> 남겨
   }
//---------------------------------------------

function toggleCompleted(id){    
    todos = todos.map( todo => todo.id === +id ? ({...todo, completed: !(todo.completed) }) : todo )
};
//-----------------------------------------------

// AllToggle 체크박스 온체인지되면 모든 li 체크되기
const completeAllToggle = (checked) => {
    todos = todos.map(todo => ({...todo, completed: checked}))
}

// clear-completed 버튼 클릭하면, 체크박스 체크되어있는 li 삭제하기
const clearCompleted = () => {
    todos = todos.filter(todo => !todo.completed);
}


// checked 가 true 인것만 Active 클래스를 달기
// .nav 의 li에 돌아가면서 classList를 달아야 한다.
// "돌아가면서" = "순회하면서" : 배열메서드

// console.log($nav); // $nav 의 li들
// console.log(typeof $nav); // object
// console.log(Object.hasOwnProperty('length')); // true 
// console.log(Array.isArray($nav)); // false
const tabMove = (target) =>{
    [...$nav.children].forEach($navItem => {
        if($navItem === target){
            target.classList.add('active');
        }else{
            $navItem.classList.remove('active');
        }
    })
}





// // Event 
// 서버에서 데이터를 가져오기 위한 이벤트 핸들러 fetches();
window.onload = fetchesTodo();



// 새로운 투두를 만들기
$input.onkeyup = (event) => { // event : onkeyup 이벤트로 인해 생성된 객체를 event라고 한다.)
    // 이벤트가 일어나고, 그 이벤트로 인해 발생한 정보들을 담은 객체
    
    // 기존 투두에 새로운 투두를 합친다.
    // console.log(event.target);// 이벤트가 일어난 돔요소 

    if (event.key !== 'Enter') return;
    // console.log(todos);// 기존 배열
    
    // const newTodo = [{id: 4, content: event.target.value, completed: false }];
    // // newTodo + todos = todos 재할당시키면 됨. // CONCAT, ...TODOS
    // todos = newTodo.concat(todos);

    addTodo(event.target.value);
    // console.log(todos); // newTodo 추가된 배열

    render(); // <- todos 가, 배열이 추가되어 새로운 배열이 되었으므로 랜더링을 다시 해야 한다. 
}


// li 제거하기 (x 버튼 누르기)
$todos.onclick = (event) => { // onclick 이벤트로 인해 생성된 객체를 event 라고 한다. 
    // console.log(event.target);// <i class="remove-todo far fa-times-circle"></i> : 이벤트가 일어난 돔요소
    // console.log(event.target.parentNode);// <li id="myId" class="todo-item">
    // console.log(event.target.parentNode.id);// 2:  2번째 li 의 x 클릭했을때
    // console.log(typeof event.target.parentNode.id);// string
    if(!event.target.matches('.todos > li > i')) return;
    removeTodo(event.target.parentNode.id)    

    render();
}

//---------------------------------------------------------------------------
// todos 에 변화가 생기면(체인지 이벤트가 일어나면) 

$todos.onchange = (e) => {
    console.log(e); // todos의 li 하나의 input에 일어난 이벤트 정보에 대한 객체
    console.log(e.target); // 변화된 todos의 li 하나의 input 하나.
    console.log(e.target.parentNode); // 변화된 todos 의, 하나의 li의, 하나의 input의 부모요소인, 변화된 li
    console.log(e.target.parentNode.id); // 변화된 todos 의, 하나의 li의, 하나의 input의 부모요소인, 변화된 li의 id
    toggleCompleted(e.target.parentNode.id)
    render();
}
//---------------------------------------------------------------------------
// AllToggle 체크박스 온체인지되면 모든 li 체크되기
$completeAllToggle.onchange = (e) => {
    // 올토글이 체크 되면 ? 모든 todos의 complete 가 true / 아니면 모든 todos의 complete 가 false


    // console.log(event.target);// <input class="checkbox" type="checkbox" id="ck-complete-all">
    
    // console.log(event.target.checked); // 체크 하면 true
    completeAllToggle(e.target.checked);

    
    // todos = 배열
    // todo = 객체
    // console.log(todos); // newTodo 추가된 배열
    // console.log(...todos); // 배열 풀어진 객체들
    // ...todo = ...{id: 4, content: html} 
    // 프로퍼티 변경하려면 └> { } 객체 형태를 유지하는 중괄호로 감싸야 한다. 

    render()
}


// clear-completed 버튼 클릭하면, 체크박스 체크되어있는 li 삭제하기
$clearCompleted.onclick = (e) => {
    // console.log(e.target);// <button class="btn">Clear completed (<span class="completed-todos">0</span>)</button>
    if(!e.target.matches('.clear-completed > button')) return;
    
    // todo.completed 가 true 되어있는 li를 삭제
    // todo.completed 가 true 안되어있는 li를 남겨라
    clearCompleted();
    render();
}



$nav.onclick = (e) => {
    // console.log(e); // 클릭이벤트가 되면 발생되는 이벤트 정보가 담긴 객체 : Active 누르면 id가 Active를 가지고 있는 파란네모가 된다.
    // console.log($nav.classList); // nav 덩어리 전체 =>> length : 1 , value: nav 
    // console.log($nav.children); /* HTMLCollection(3) li 3개 : 
    // All, Active, Completed. <- 배열은 아니지만 Dom컬렉션인 HTMLCollection 이라는 유사배열객체다.*/
    // ┌ 그러면 유사배열객체를 배열로 만들려면? : 스프레드 문법
    
    
    //     console.log(e.target); // Active가 선택되면 id Active 가 반환, Completed가 선택되면 id Completed 가 반환된다.
   
    if ( !e.target.matches('.nav > li')) return;
     // console.log(e.target); // id를 Active 라고 가지고 있는 li
    // console.log(e.target.id); // Active 를 누르면 'active'가 반환된다.
    tabMove(e.target);

    render();
}

