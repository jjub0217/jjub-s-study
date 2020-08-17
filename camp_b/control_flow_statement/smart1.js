// 특정 값이 여러 값중에 하나인지 확인해야 되는 상황이라면?

function isAnimal(text) {
    // 여러가지 상황에 맞춰서 text 가 이것들 중에 하나라면 
    // return true 를 하는 함수를 만든거다.
    return (text === '고양이' || text === '개' || text === '거북이' || text === '너구리');
}
console.log(isAnimal('개'));
console.log(isAnimal('노트북'));

// 위 코드보다 간단하게 하려면?
// 우리가 비교하고 싶은 것들을 배열안에 넣자. 


function isAnimal(text) {
    const animals = ['고양이', '개', '거북이', '개'];
    return animals.includes(text); // <- 우리가 찾고 싶은 text를
    // includes 괄호에 넣어주게 되면
    // 만약에 animals 라는 배열안에 text가 존재한다면
    // 이 값은 true고 false가 될것이다. 
}
console.log(isAnimal('개'));
console.log(isAnimal('노트북'));

// 위 코드를 화살표 함수로 고친다면?

const isAnimal = (text) => {
    ['고양이', '개', '거북이', '개'].includes(text);
}
console.log(isAnimal('개'));
console.log(isAnimal('노트북'));