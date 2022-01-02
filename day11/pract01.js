// null을 기반으로 prototype 객체를 생성한다.
// Object에 있는 기본적인 프로퍼티가 존재하지 않는다
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) == null);
// TypeError: obj.toString is not a function obj 변수는 Object의 프로토타입을 상속받지 못했기 때문에
// toString 프로퍼티(메소드)가 없다는 것을 확인 할 수 있다
// console.log(obj.toString());

// Object.prototype을 상속 받아 객체를 생성한다.
let obj2 = Object.create(Object.prototype);
obj2 = Object.create(Object.prototype, {
    x : { value : 1, writable : true, enumerable : true, configurable : true }
});

// 평소 객체에 프로퍼티를 부여할 때 위의 리터럴이 동작한다.
// 위의 코드는 아래와 동일하다
//obj2.x = 1;
obj2.x = 3;
// console.log(obj2);

// __proto__ 메소드를 이용한 객체 리터럴 내부에서 상속하기
const proto = { x : 10 };
const proto2 = {
    y : 20,
    __proto__: proto
};
console.log(proto2.x); // 10
console.log(proto2.y); // 20
console.log(Object.getPrototypeOf(proto) == proto2); // true
// proto2는 proto의 프로퍼티를 상속받았기 때문이다.

//
function Person(name) {
    this.name = name;
}

// 프로토타입 메소드 선언
Person.prototype.hello = function() {
    console.log(`My name is ${this.name}`);
}


// 정적 메소드 선언
Person.bye = function() {
    console.log(`Bye!`);
}
const lee = new Person('lee');
lee.hello();
// lee.bye();  //TypeError: lee.bye is not a function
// 정적 메소드는 생성자 함수로 생성된 객체에서 참조할 수 없다.
lee.bye = function() {
    console.log(`Bye!`);
};

lee.bye();
// 만약 lee라는 객체에 bye라는 프로퍼티를 부여하고 싶다면 lee에서 프로퍼티를 생성해야한다.
// 단, 이외 Person을 상속받은 다른 객체는 lee의 bye 참조할 수 없다.


// in 키워드를 사용하여 객체에 해당 프로퍼티가 있는지 판별할 수 있다.
const fruit = {
    name : 'apple',
    price : 2000
}

console.log(fruit);
console.log('name' in fruit);
console.log('price' in fruit);
console.log('size' in fruit);   //false
// 물론 매소드도 가능하다(프로퍼티라서)
console.log('toString' in fruit);

// ES6이후에는 has연산자를 사용할 수 있다
console.log(Reflect.has(fruit, 'toString')); //true
// Object 프로토타입 메소드를 활용할 수 있다.
console.log(fruit.hasOwnProperty('name')); //true
// 단 상속받은 프로퍼티에 대해서는 거짓을 반환한다.
// toString은 [[enumerable]] 속성이 false로 되어있기 때문이다.
console.log(fruit.hasOwnProperty('toString')); //false
//enumerable: false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
for (key in fruit) {
    console.log(`key : ${key}, value : ${fruit[key]}`);
}