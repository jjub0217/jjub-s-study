res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (item) {
return item % 3 === 0;
})
console.log(res);  // [3, 6, 9]

// 3으로 나눠서 나머지가 0인 숫자(3의 배수인 숫자)만 필터링해서 추출해서 배열을 만들어라.
