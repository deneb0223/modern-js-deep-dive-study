// 자바스크립트에서는 객체 변경 방지를 위한 기술이 있다.
// 크게 확장 금지(preventExtensions), 밀봉(seal), 동결(freeze)

const person = { name : 'LEE' };

// Object.isExtensible()을 이용하여 객체 확장 (프로퍼티 추가) 가능 여부 확인 가능
console.log(Object.isExtensible(person));

Object.preventExtensions(person); // 확장 금지 적용

console.log(Object.isExtensible(person));

// 프로퍼티 추가는 금지됨 (에러는 발생하지 않음)
person.age = 50;
// 프로퍼티 삭제 가능
delete person.name;
// 정의, 프로퍼티 추가 안됨
// TypeError: Cannot define property age, object is not extensible
// Object.defineProperty(person, 'age', {value : 20});