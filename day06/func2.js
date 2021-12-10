// 함수 리터럴
// 함수는 객체 타입.. 숫자 리터럴을 이용해 숫자 값를 생성하고.. 문자 리터럴을 이용해 문자 값을 생성한다..
// 따라서 함수 리터럴만 이용해도 함수 값을 생성할 수 있다.ㄴ
var myFunc = function myFunc() {

};
console.log(myFunc);    //[Function: myFunc]

// 함수명을 생략한 함수 리터럴이다. 함수명을 생략하면 익명함수가 된다. 익명함수라도 자바스크립트는 암무적인 식별자가 생성된다.
// 따라서, myFuncWithoutFunctionName식별자는 암묵적인 할당 공간을 참조하는 식별자가 된다.
var myFuncWithoutFunctionName = function() {};
console.log(myFuncWithoutFunctionName);    //[Function: myFuncWithoutFunctionName]


// 함수 정의(function definition)을 먼저 짚고 가자
// 정의라는 말은 선언(declaration)과 차이가 없어 보인다..

// 하지만 교재에서는 함수를 선언한다고 하기 보단 '정의'한다고 표현한다.
// 이는 아래와 같이 함수 선언문이 엔진에 의해 평가되면
function someFunction() {
    console.log('someFunction');
}

// 암묵적인 식별자가 생성되어 함수객체가 할당되기 때문에 정의라고 표현한 것이다.

// 함수 참조
console.dir(someFunction);//[Function: someFunction]

// 함수 호출
console.log(someFunction());    

// 크롬에서 someFunction 선언문을 실행하면 완료값 undefined가 출력된다.
// 우선 함수 선언문은 표현식이 아닌 문이다.
// 자바스크립트 엔진은 함수 선언문을 undefined 값으로 평가한 것이다.

// 그런데 위의 myFunc와 같은 경우 함수선언문은 변수에 할당되었다

// 이는 자바스크립트 엔진이 코드의 문맥(주변 상황..)에 따라 해석이 달라지는 것이다.
// 중괄호 리터럴 {}을 떠올려보자

// 객체 리터럴을 할떄는?
var someObj = {};
// 중괄호를 이용하여 표현한다
// if, for, while등에서 블록을 구성할 때는?
if(true) {
}
// 중괄호를 이용한다
// 함수를 선언할 때는? 중괄호를 실행한다
(function () {

}());
// 우항에 피연산자인 경우 객체리터럴, 단독 존재시 코드 블록으로 해석한다.. 