// 얆은 복사(shallow copy)와 깊은 복사(deep copy)
// 자바의 얆은 복사는 객체가 참조하는 곳을 복사하는 것의 의미하지만 
// 자바스크립트는 객체의 첫번째 프로퍼티(1단계 깊이)까지만 복사하는 것을 의미한다.

const someObject = {
    innerObject : {
        key : 'value'
    }
};

//얇은 복사는 {...[객체변수명]}과 같은 스프레드 문법을 사용한다..
const copyObject = {...someObject};
console.log(copyObject == someObject);  //false
console.log(copyObject.innerObject == someObject.innerObject)   //true
//위와 같은 얇은 복사는 내부의 객체는 기존의 참조값을 가져온 것을 확인할 수 있다.
//물론 copyObject와 someObject 변수는 다른 객체다!

// npm의 lodash 패키지 설치
const _ = require('lodash');
// 깊은복사를 수행
const deepCopyObject = _.cloneDeep(someObject);
console.log(deepCopyObject == someObject);  //false
console.log(deepCopyObject.innerObject == someObject.innerObject)   //false

// 깊은복사는 얇은복사와 다르게 내부의 객체값까지 복제하여 완전히 다른 객체를 생성한다.

// 원시타입을 참조하면 깊은복사
var number = 1;
var myNumber = number;
console.log(number === myNumber);

// 객체타입을 참조하면 얇은복사가 된다.
var obj = { number: 1};
var myObj = obj;
console.log(obj === myObj);
