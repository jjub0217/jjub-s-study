// concat 

const firstCouple = ['오세진', '강주현'];
const secondCouple = ['남택용', '우효정'];

const couple = firstCouple.concat(secondCouple);
console.log(couple);
// ['오세진', '강주현', '남택용','우효정']


/////////////////////////////////////////////

const male = [
    {
        name: '박상언',
        age: 29
    }, 
    {
        name: '김용민',
        age: 26
    }
]

const female = [
    {
        name: '강주현',
        age: 33
    },
    {
        name: '정세영',
        age: 27
    },
    {
        name: '원진솔',
        age: 26
    }
]

const buamdong = male.concat(female);
console.log(buamdong);

const twentySix1 = male.filter(member => member.age === 26);
console.log(twentySix1); // [ { name: '김용민', age: 26 } ]

const twentySix2 = female.filter(member => member.age === 26);
console.log(twentySix2); // [ { name: '원진솔', age: 26 } ]

const sameAge = twentySix1.concat(twentySix2);
console.log(sameAge); // [ { name: '김용민', age: 26 }, { name: '원진솔', age: 26 } ]