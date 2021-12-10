var myIndex = 1000;
console.log(`before value : ${myIndex}`);


// 코드
for (var myIndex = 0; myIndex < 10; myIndex++) {
    console.log(`code block value: ${myIndex}`); //0 .... 9
}

// 함수
myIndexScope();
function myIndexScope() {
    var myIndex = 100;
    console.log(`function block value : ${myIndex}`);   // 100
}

console.log(`after value : ${myIndex}`);