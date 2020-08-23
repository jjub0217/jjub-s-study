let nums = ['1', '2', '3'];
let chars = ['a', 'b', 'c', 'd'];

let nums1 =nums.join();
console.log(nums1); // 1,2,3

let num2  = nums.join('-')
console.log(num2);// 1-2-3

// myColor 배열의 요소를 colorString 같은 문자열로 표시하려면 join()함수를 어떻게 사용해야 할까요?

myColor = ['red', 'green', 'blue']
// colorString = 'red+green+blue';

colorString = myColor.join('+');
console.log(colorString);