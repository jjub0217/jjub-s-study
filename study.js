var p = function Person (name) {
    this.name = name;
}

p.sayHi = function(){
    return `Hi my name is ${this.name}`
}

const me  = new p('oh')

console.log(me.sayHi());

console.log(p.hasOwnProperty('name'));
console.log(p.hasOwnProperty('prototype'));
console.log(p.hasOwnProperty('sayHi'));

// console.log(me.);








