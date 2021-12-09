var myIndex = 10;
// 코드
for (var myIndex = 0; myIndex < 10; myIndex++) {
    console.log(myIndex); //0 .... 9
}

// 함수
myIndexScope();
function myIndexScope() {
    var myIndex = 100;
    console.log(myIndex);   // 100
}
console.log()