// 기본적인 obj
var person = {
    name: 'LEE',
    age: 20
}

console.log(person);

const person2 = {
    name: 'LEE',
    age: 20,

    getAge: function() {
        return this.age;
    }
}

person2.age = 43
console.log(person2)    // name: 'LEE', age: 43 아무리 const라도 property는 바뀐다
//person2 = {}; TypeError: Assignment to constant variable.


// 빈 객체는 중괄호{}를 사용하여 생성할 수 있음
var emtpyObject = {};
console.log(typeof emtpyObject);

console.log(person2.hasOwnProperty('age'));     // true
console.log(person2.hasOwnProperty('area'));    // false

// ES6 객체 리터럴 확장, 변수로 프로퍼티를 지정할 수 있음(ㅏㄷ)
var name = 'kim'
var age = 30

var p = {
    name,
    age
}

console.log(p)