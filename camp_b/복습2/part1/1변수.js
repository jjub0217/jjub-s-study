//  변수와 상수
/*  1. 변수 
        - 특정 이름(변수)에 특정값을 담을때 사용
        - 바뀔수 있는 값
        a. var
        b. let     <┐
    2. 상수         │ - 똑같은 이름으로 재선언이 불가능하다.(let, const)
                    │ - 구형 브라우저에서는 사용할수 없다.(대신 바벨로 우회해서 사용할수 있다.)   
        a. const   <┘
        - 한번 값을 설정하면 바꿀수 없다. (고정적이다)
*/

/*
 선언 : 변수에 특정값을 담는 것
*/

/* 데이터 타입:
    1. 문자열 
        -텍스트 
        - 여러개의 문자 
    2. 불리언 
        - 참 혹은 거짓(true / false)
    3. null
        - 없다.
        - ex) let friend - null;(나는 친구가 없다.)
    4. undefined
        - 아직 정해지지 않았다. 
        - ex) let criminal = undefined(범인은 아직 모른다. 아직 정해지지 않았다.)
            */


let value = 1;
console.log(value);

value = 2;
console.log(value);