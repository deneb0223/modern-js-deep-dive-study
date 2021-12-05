// js에서는 변수에 값이 없는 것을 null로 표현한다.
/*
 java에서는 변수에 의도적으로 값을 할당하든 하지 않는 null이 할당되지만
 js는 다르다. js는 var, let의 경우 값을 할당하지 않으면 undefined 타입이 지정된다.
*/
var name;
let age;
const area = undefined; //const의 경우 초기값을 할당하지 않으면 SyntaxError: Missing initializer in const declaration 발생
console.log(name);  //undefined
console.log(age);  //undefined
console.log(area);  //undefined


// js의 null은 값이 없다는 것을 의도적으로 명시하고자 하는 경우 사용한다
var someNoneValue = null; 
if (!someNoneValue) // null은 if문에서 false로 한다
    console.log('someValue is null');