function Circle(radius) {
    this.radius = radius,
    this.getArea = function() {
        return this.radius * Math.PI ** 2;
    }
};

// 생성자 함수를 사용구현한다.

const circle1 = new Circle(10);
const circle2 = new Circle(20);

console.log(circle1.getArea === circle2.getArea); //false
//circle1, circle2의 메소드는 다른 할당 공간을 바라보고 있다.
//getArea는 어떠한 상태를 나타내는 것이 아닌 수행을 하는 프로퍼티, 메소드다.
//circle1, circle2 모두 동일해도 무관한 프로퍼티다.
//하지만 같은 기능을 수행하는 프로퍼피가 다른 메모리 공간을 할당하고 있으면, 이는 메모리 낭비라고 할 수 있다.

// 자바스크립트에서는 Object의 prototype을 이용하여 상속을 구현할 수 있다.
function Circle(radius) {
    this.radius = radius
};

Circle.prototype.getArea = function() {
    return this.radius * Math.PI ** 2;
};

const circle3 = new Circle(10);
const circle4 = new Circle(20);

console.log(circle3.getArea === circle4.getArea); //true
// getArea메서드를 공통으로 사용하여 불필요한 메모리 낭비를 방지하고, 공통성을 확장시킬 수 있다.
// 자바스크립트는 프로타입 객체 기반으로 이루어진다는 말은 모든 객체가 부모의 프로토타입을 상속받아 기능을 수행하기 때문이다.