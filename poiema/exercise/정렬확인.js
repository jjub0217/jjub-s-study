function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i + 1], array[i]); // 2 1 , 3 2 , 4 3 , 5 4 
        if (array[i + 1] < array[i]) {
            return false
            // console.log(false);
        }
    }
    return true
    // console.log(true);
}

// console.log(isSorted([1, 2, 3, 4, 5])); // true
// isSorted([1, 2, 3, 4, 5]); // true
console.log(isSorted([2, 3, 4, 1, 5])); // false

