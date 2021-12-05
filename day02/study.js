// 변수 선언
var userId = 1;
var userName = 'Kim';

// object형태로 하나의 변수에 여러가지 데이터를 묶을 수 있다
var user = {id : 1, userName : 'Kim'};

var users= [
    user,
    {id : 2, userName : 'Lee', age : 30}
];  // 이것도 컴파일된다..
console.log(typeof(user)  == typeof({id : 2, userName : 'Lee'}));   //같은 object형이다.
console.log(users);


// var의 특징
for (var i = 0; i < 10; i++ ){
    
}

console.log(i); //10


// 자바스크립트는 별도의 할당된 값이 없으면 undefined
var temp;
console.log(temp);


// 동적으로 타입추론이 발생한 경우
console.log(1 == '1'); 
console.log(1 === '1'); //엄격한 타입체크라면 ===을