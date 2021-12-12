// 내부 슬롯과 내부 메서드는 ECMAScript 사양에 정의된 대로 구현하여 실제 JS에서 동작한다.

const obj = {};
// obj.[[Prototype]]; 실제
obj.proto;

// 객체는 프로퍼티로 이루어진 타입이다
const person = {
    name : 'lee'
}

console.log(person);
// 객체의 디스크립터를 확인할 수 있다.
// https://262.ecma-international.org/12.0/
console.log(Object.getOwnPropertyDescriptor(person, 'name'));