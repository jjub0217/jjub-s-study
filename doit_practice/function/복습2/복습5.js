let result1 = (function () {
    return 10 + 20;
})();
console.log(result1); // 30 


let result2 = (function (a, b) {
    return a + b;
})(30, 20);
console.log(result2); // 50
