// 연산자
console.log(5 + 4);     //산술연산자

var str = 'Hello' + ' My Name is..';    //문자연결 연산자 + 할당연산자


//비교
if (1 < 2)
    console.log('1 is small than 2');
//논리
if (true || false)
console.log('true result');


// JS에서는 0, false, undefined, null을 false 취급한다.
// 자바와 다르게 null, undefined를 false와 같이 취급해도 된다.
if ( !(0 && false && undefined && null)) {
    console.log('모두 거짓');
}


// 단항연산자(+, -)는 피연산자를 숫자타입으로 반환한다.
let input = '5';
console.log(+input * 3);    //15


// (중요) + 연산자는 연산대상자중 하나라도 string이 있는 경우 문자열 연결 연산을 진행한다
// 때문에 아래와 같이 2를 의도한다고 해도 문자열을 연결한 결과가 나오니 유의해야한다.
var str = '1' + 1;
console.log(str);   // 11

// 자바스크립트에 비교연산자는 동등비교, 일치비교가 존재한다.
// 동등비교는 (==), 일치비교는 (!==)로 표현한다.

console.log(1 == '1');      //true
console.log(1 === '1');     //false

// 둘의 차이점은 동등비교는 암묵적 타입변화가 일어나 비교하지만
// 일치비교는 타입까지 체크한다.

// 개발간 타임에 엄격한 체크를 하고 싶다면 일치비교(===)를 사용하는 것이 좋아 보인다.

// 삼항 조건 연산자
// 자바스크립트 역시 삼항 조건 연산자를 지원한다.
// 개인적으로 삼항 조건 연산자는 아래와 같은 if else문을 한줄로 표현하고 싶은 경우에 사용하는 것이 좋다고 생각한다.
//
var sum = 100;
if (sum < 500) {
    console.log('큼');
}
else
    console.log('작음');


// -> 
(sum < 500) ? console.log('큼') : console.log('작음');

// 연산자의 계산 순서
// 연산자의 순서에는 여러가지 종류가 있다.
// 교재에는 다양한 순서가 존재하지만 짚고 넘어가야할 부분이 있다.
// 흔히 자바에서 String의 null 체크 시 
// if (str == null || str == "")과 같이 하는데, JS 역시 자바와 동일하게 || 연산도 좌항 -> 우항 순이다.


/**
 * 암묵적 타입 변화는 자바스크립트를 사용할 때 혼란을 유발한다.
 */
console.log(1 + '1'); // 11 (+ 연산만 예외 적으로 문자열 우선 순위!)
console.log(`${1 + '1'}`); //2 ,템플릿 기능은 ES6부터 사용가능

console.log(1 * '2'); //2 숫자
console.log(4 / '2');
console.log(4 % '2');


/**
 * 따라서 코드에 의도를 명확히 표현하고자 한다면 명시적 타입변화를 사용하는 것이 좋다
 */

var num = parseInt('1');
var num2 = Number('2');
console.log(`${num}, ${num2}`);

// 이밖에 String, toString(), Boolean 등이 있다. 함수의 사용방식은 자바와 비슷하다.
