const hello1 = () => {
    console.log('hello1');
}
hello1();

const hello2 = name => {
    console.log(hello2, name);
}
hello2('주현');

const hello3 = (name, age) => {
console.log('hello3', name, age);
}
hello3('주현', 20);

const hello4 = name => {
    return `hello4 ${name}` ;
}
console.log(hello4('주현'));

const hello5 = name =>
`hello5 ${name}`
console.log(hello5('주현'));
