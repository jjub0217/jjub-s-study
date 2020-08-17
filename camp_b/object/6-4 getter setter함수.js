const numbers = {
    a: 1,
    b: 2,
    get sum(){
        console.log('sum');
        return this.a + this.b
    }
}

console.log(numbers.sum); // 3
console.log(numbers.sum); // 
console.log(numbers.sum); // 
console.log(numbers.sum); // 
