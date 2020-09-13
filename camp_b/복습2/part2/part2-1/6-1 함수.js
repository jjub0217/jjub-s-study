// ES6 : 자바스크립트의 버전 중에 하나 (2015년에 도입됨)

/* 점수를 0 부터 100까지 가져와서 a,b,c,d,e,f 식으로 등급형태로 변환해서 출력해라

100 = A+  / 90 ~ 99 = A
89 = B+  /  80 ~ 88 = B
79 = C+  /  70 ~ 78 = C
69 = D+  /  60 ~ 68 = D
59 = E+  /  50 ~ 58 = E
            50 > x = F
*/

function getGrade(score){
    if(score === 100){
       return 'A+';
    }else if(score >= 90){
        return 'A'
    }else if(score === 89){
        return 'B+'
    }else if(score >= 80){
        return 'B'
    }else if(score === 79){
        return 'C+'
    }else if(score >= 70){
        return 'C'
    }else if(score === 69){
        return 'D+'
    }else if(score >= 60){
        return 'D'
    }else {
        return 'F'
    }
}


// const grade = getGrade(100); // <- 점수가 100점일 경우 : A+ 로 출력해라
// console.log(grade);
// const grade = getGrade(90); // 
// const grade = getGrade(99); // <- 점수가 90점 이상일 경우 : A 로 출력해라
// console.log(grade);
// const grade = getGrade(89); // <- 점수가 89점일 경우 : B+ 로 출력해라
// console.log(grade);
// const grade = getGrade(85); // <- 점수가 80점 이상일 경우 : B로 출력해라
// console.log(grade);
// const grade = getGrade(79); // <- 점수가 79점일 경우 : C+ 로 출력해라
// console.log(grade);
// const grade = getGrade(75); // <- 점수가 70점 이상일 경우 : C 로 출력해라
// console.log(grade);
// const grade = getGrade(69); // <- 점수가 69점일 경우 : D+ 로 출력해라
// console.log(grade);
// const grade = getGrade(65); // <- 점수가 60점 이상일 경우 : D 로 출력해라
// console.log(grade);
const grade = getGrade(59); // <- 점수가 60점 미만일 경우 : F 로 출력해라
console.log(grade);