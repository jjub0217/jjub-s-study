// // // 특정값이 유효할때만 어떤 값을 조회해야 하는 상황에 사용


const dog = {
    name: '멍멍이'
};

function getName(animal) {
    if(animal){
        return animal.name;
    }
    return undefined;
}

const name = getName(dog);
console.log(name);  // 멍멍이

// // // --------------------------------------

const todayStudy = {
    start: 'pm 3',
    end: 'pm 11'
} 

function frontEnd(javascript){
    if(javascript){
        return javascript.end;
    }
    return undefined;

}
const studyEndTime = frontEnd(todayStudy);
console.log(studyEndTime);



// └> 위의 코드를 단축평가 논리계산법을 사용하면 아래 코드처럼 하면 된다.

const todayStudy = {
    start: 'pm 3',
    end: 'pm 11'
} 

function frontEnd(javascript){
  return javascript && javascript.end;

}
const studyEndTime = frontEnd(todayStudy);
console.log(studyEndTime);


// // 어떤값이 falsy 하다면 대체로 사용할 값을 지정해줄때 : OR 논리 연산자 사용

const namelessDog = {
    name: '',   // <------------------------─┐                    
 // name: '멍뭉이' <-------------------------│-------  
}; //                                        │      │                      
//                                           │      │
function getName(animal) {//                 │      │
    const name = animal && animal.name;//    │      │
    if(!name){//                             │      │
        return '이름이 없는 동물입니다.'; // <┘      │
    }//                                             │
    return name; //<--------------------------------┘       
}
const name = getName(namelessDog);
console.log(name); //'이름이 없는 동물입니다.'
                  // 멍뭉이


// └> 위 코드의 if 문을 더 간단히 하려면 아래 코드처럼 하면 된다.


const namelessDog = {
    name: '',   // <----------------------------─┐                    
//name: '멍뭉이'// <------------------------─┐---│  
}; //                                        │   │                      
//                                           │   │
function getName(animal) {//                 │   │
    const name = animal && animal.name;//    │   │
    return name || '이름이 없는 동물입니다.'//│   │
//          ↑                  ↑             │   │            
}//         └------------------│-------------┘   │
//                             └-----------------┘
const name = getName(namelessDog);
console.log(name); //'이름이 없는 동물입니다.'
                  // 멍뭉이





