function add(a, b) {
    console.log(`a : ${a}`)
    console.log(`b : ${b}`)
    console.log("arguments " + arguments.length)
    return a + b;
}

console.log(add(1, 2, 3, 4));  // 4개의 인자를 설정하면 arguments는 4개의 값을 가지게 된다

console.log(add.length);