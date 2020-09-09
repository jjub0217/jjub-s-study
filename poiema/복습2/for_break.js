// 문자 d 일경우에 res의 값을 반전시켜라.

var str = 'abcdddddddddefg' 


let res = false;

for(let i = 0; i < str.length; i++){
    if(str[i] === 'd'){
        res = true;
        break;
    }
}
console.log(res);