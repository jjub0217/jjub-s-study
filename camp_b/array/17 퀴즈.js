// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요


const count = countBiggerThanTen([1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60]);

function countBiggerThanTen(numbers) {
    //  console.log(numbers);
    //  console.log(typeof numbers);
    let sum = numbers.filter(number => number > 10);
    return sum.length;
}
console.log(count);