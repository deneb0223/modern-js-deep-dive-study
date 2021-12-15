// 지금까지 객체는 객체 리터럴 ({}) 이용하여 생성하였다.
// 이번 장에서는 new Object() 연산을 이용하여 생성한다.
const person = new Object();
// 프로퍼티에 값을 할당한다.
person.name = 'lee';
person.greeting = function() {
    console.log(`My name is ${this.name}`);
}
// new 연산자를 통해 생성된 메소드를 확인할 수 있다
person.greeting();

// JS는 이밖에 String, Number, Boolean, Function, Array, RegExp, Date에 대한 new 연산자를 제공한다.
const str = new String('This is String');
const num = new Number(100);
const bol = new Boolean(true);
const func = new Function('a', 'b', "return a * b");
const arr = new Array('a', 'b', 'c');
const reg = new RegExp(/[0-9]/i);
const date = new Date();


// 객체 리터럴을 이용하여 객체를 생성하는 것에 비하면 문법상으로 복잡해보인다(?)
const str2 = 'hello';

// 그럼 new 연산자가 객체 리터럴을 이용하여 생성하는 것에 비해 가지는 특징은 무엇인가?

const circle = {
    radius : 10,
    getDiameter : function () {
        return this.radius;
    }
};


const circle2 = {
    radius : 20,
    getDiameter : function () {
        return this.radius;
    }
};


// 위와 같이 원을 표현하고자하는 객체를 2개를 생성하였다. 프로퍼티를 선언함에 있어 중복된 작업이 존재한다.
// new 연산자를 이용한다면?
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return this.radius;
    }
}
// 원의 형태를 규격화(템플릿화)한다.

const circle3 = new Circle(10);
const circle4 = new Circle(20);
const circle5 = new Circle(30);
// 간단하게 생성할 수 있다. 규격화된 객체타입이 있는 경우 new 연산자를 사용하는 것이 좋다.
console.log(circle3.getDiameter());



const add = () => {
    console.log(`arrow this : ${this}`);
};

add();  //arrow this : [object Object]
