function toWeirdCase(s) {
    let strArray = '';
    let str1 = s.split(' ');
    // console.log(str1); // ['hello', 'world'] / ['my','name','is','lee']
    // console.log(str1.length); // 2 / 4
    // console.log(str1[0].length); // 5 / 2 
    // console.log(str1[0][0]); // h / m 
    for (let i = 0; i < str1.length; i++) {
        let str2 = str1[i].split('');
        /* console.log(str2); /* [ 'h', 'e', 'l', 'l', 'o' ] [ 'w', 'o', 'r', 'l', 'd' ]
                              [ 'm', 'y' ] [ 'n', 'a', 'm', 'e' ] [ 'i', 's' ] [ 'l', 'e', 'e' ] */
        for (let j = 0; j < str2.length; j++) {
            if (j % 2 === 0) {
                strArray += str2[j].toUpperCase();
            } else {
                strArray += str2[j].toLowerCase();
            }
        }
        strArray += ' ';
    }
    return strArray;
}
// toWeirdCase('hello world');
// toWeirdCase('my name is lee');



console.log(toWeirdCase('hello world'));
console.log(toWeirdCase('my name is lee'));