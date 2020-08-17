function multiple(a, b = 5, c = 10) {
    return a * b + c;
}

// multiple(5, 10, 20); // 70
console.log(multiple(5, 10, 20)); // 70
// a = 5 , b = 10, c = 20

// multiple(10, 20); // 210
console.log(multiple(10, 20));  // 210
// a = 10, b = 20, c = 10 (c = 10 은 매개변수 위치에 미리 지정해둔 기본값)

// multiple(30); // 160
console.log(multiple(30));  // 160
// a = 30, b = 5, c = 10 (b = 5 와 c = 10 은 매개변수 위치에 미리 지정해둔 기본값)
