var val1 = 1;

if (true) {
    var val2 = 2;
    if (true) {
        var val3 = 3;
    }
}

function foo() {
    var val4 = 4;
    
    function bar() {
        var val5 = 5;
    }

}

console.log(val1);
console.log(val2);
console.log(val3);
// console.log(val4);  ReferenceError
// console.log(val5);  ReferenceError


