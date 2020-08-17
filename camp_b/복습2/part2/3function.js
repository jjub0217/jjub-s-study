// ES6 : ECMA script6 를 의미하며, 자스의 버전을 가리킨다.  ES2015 라고도 한다. 
// 리턴문을 사용하면 함수가 종료가 된다. 

// 점수를 0 부터 100까지 가져와서 abcd 등의 등급으로 변환시켜라

function getGrade(score){
    if(score === 100) {
        return 'A+';
    }else if(score >= 90){
        return 'A';
    }else if(score === 89){
        return 'B+';
    }else if(score >= 80){
        return 'B';
    }else if(score === 79){
        return 'C+';
    }else if(score >= 70){
        return 'C';
    }else if(score === 69){
        return 'D+';
    }else if(score >= 69){
        return 'D';
    }else{
        return 'F';
    }
}

const grade = getGrade(50);
console.log(grade);


