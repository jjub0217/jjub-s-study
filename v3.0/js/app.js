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

// function
const render = () => {
    
    let tabMoveTodos = [...todos];
    
    const targetId = $nav.querySelector('.active').id;

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

    $todos.innerHTML = html;
    $input.value = '';

    $completedNumber.textContent = todos.filter(todo => todo.completed).length;
    $activeTodosNumber.textContent = todos.filter(todo => !todo.completed).length;
}


const maxId = ()=> {
    return Math.max(...(todos.map((todo) => todo.id))) + 1;
}

const addTodo = (content) => { 
    const newTodo = [{id: maxId(), content, completed: false }];
    todos = newTodo.concat(todos);
}

const removeTodo = (id)=> { 
    todos = todos.filter(todo => todo.id !== +id) 
}

function toggleCompleted(id){
    todos = todos.map( todo => todo.id === +id ? ({...todo, completed: !(todo.completed) }) : todo )
};

$todos.onchange = (e) => {
    toggleCompleted(e.target.parentNode.id)
    render();
}

const completeAllToggle = (checked) => {
    todos = todos.map(todo => ({...todo, completed: checked}))
}

const clearCompleted = () => {
    todos = todos.filter(todo => !todo.completed);
}

const tabMove = (target) =>{
    [...$nav.children].forEach($navItem => {
        if($navItem === target){
            target.classList.add('active');
        }else{
            $navItem.classList.remove('active');
        }
    })
}


// Event 

window.onload = fetchesTodo();

$input.onkeyup = (event) => { 

    if (event.key !== 'Enter') return;
    addTodo(event.target.value);

    render();
}

$todos.onclick = (event) => { 

    if(!event.target.matches('.todos > li > i')) return;
    removeTodo(event.target.parentNode.id)    

    render();
}

// $todos.onchange = (e) => {
//     toggleCompleted(e.target.parentNode.id)
//     render();
// }

$completeAllToggle.onchange = (e) => {
    completeAllToggle(e.target.checked);

    render()
}

$clearCompleted.onclick = (e) => {

    if(!e.target.matches('.clear-completed > button')) return;
    clearCompleted();

    render();
}

$nav.onclick = (e) => {

    if ( !e.target.matches('.nav > li')) return;
    tabMove(e.target);

    render();
}

