function linearSearch(array, target) {
    // console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        if (typeof array[i] === typeof target) {
            if (array[i] === target) {
                return i
            }
        }
    }
    return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 1));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6));
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7));