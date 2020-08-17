let done = false; 
let massage = ''; // <- 이거 왜 한거냐고

if(!done)  {  // done 이미 false 의 값을 가지고 있고, 이를 ! 부정 논리 연산자를 사용하여 true 값으로 반전 시켰다. 
      message = '미완료';  
}
console.log(message);

message = done || '미완료'; // done || '완료' <- 둘둥에 하나만 true이면 되므로, 앞의 표현식이 false 이면 뒤의 표현식까지 평가해줘야 할 필요가 있다.  
//                         // 현재 done 이 false 이고, 뒤의 표현식까지 평가해줘야 하므로, 결정하는 값은 '미완료'이다.
console.log(message);


