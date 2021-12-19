// 자바스크립트는 객체지향프로그래밍 언어다.
const person = {
    name : 'kim',
    age : 30
};
// 객체란 속성(프로퍼티)를 통해 여러 종류의 값을 하나의 단위로 구성한 복합적인 자료구조다

const circle = {
    radius : 5, // 반지름

    getDiameter() {
        return this.radius * 2;
    },

    getPerimeter() {
        return this.radius * Math.PI * 2; //Function: getDiameter]
    },

    getArea() {
        return this.radius * Math.PI ** 2;
    }
};

console.log(circle)