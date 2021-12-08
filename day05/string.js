// 자바스크립트는 문자열이 별도의 type으로 존재한다.
// 자바, 씨언어가 문자열을 각각 객체, 배열로 처리하는 것과 다른 면이 존재한다.

const str = 'Greeting';
console.log(typeof str);    // string

// 자바스크립트에서 문자열은 유사배열객체(array like object)이라고 불린다.
// 프로퍼티를 가지며
console.log(`length : ${str.length}`);
// 배열처럼 인덱스를 통해 접근하며
console.log(`str[0] : ${str[0]}`);

// 다만 const로 선언 시 원시타입의 특징인 값 변경은 불가능하다.
// 따라서 문자열은 객체의 특성을 가지고는 있으나 완전 객체 타입이라 보기힘든 원시타입이라고 생각한다.