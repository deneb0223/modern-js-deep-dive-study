// 자바스크립에서 변수명을 짓는 경우 몇가지 규칙이 있다

// 1) 예약어(reserved)는 사용 불가
//var var = 10; //'var'은(는) 변수 선언 이름으로 사용할 수 없습니다.ts(1389)
//https://www.w3schools.com/js/js_reserved.asp

// 2) 여러 개의 변수를 한번에 선언할 수 있다
var val1, val2, val3;
console.log(val1);

// 3) 영어가 아닌 타 문자로도 변수 식별자 생성이 가능
var 이름 = '철수';
console.log(이름);

// 4) 변수명에는 몇가지 제약사항이 있다.
// var 4People = 'sd'; 맨 앞에 숫자 사용 불가
// var thyme-leaf = 'thyme-leaf'; -, ! 등 특수문자 사용 불가

