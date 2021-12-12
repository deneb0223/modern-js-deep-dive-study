// 전역변수 사용으로 인한 리스크를 예방하는 방법이다.

// 1) 즉시 실행 함수 : 실행함수 '()'로 감싼다.
// 실행함수 내부는 별도의 스코프가 된다.
(function() {
    console.log('실행함수 내부');
}());


// 2) 네임스페이스 객체 사용
// 별도의 객체를 생성하여 해당 객체에서 프로퍼티로 관리한다.
const myProps = {};
myProps.key1 ='value1';
myProps.key2 ='value2';
function getValueByKey() {
    console.log(myProps.key1);
}
getValueByKey();
// 다만 myProps 객체를 전역으로 할당하기 때문에 전역변수를 사용하지 않는 것은 아니다

// 3) 모듈패턴
// 접근자(private, public) 지정하고 싶은때 사용한다. JS는 접근자 관련 키워드는 없지만
// 클로저(Closure)라는 개념을 사용하여 접근자 처럼 구현할 수 있다.
const someModule = (function() {
    // private 
    let number = 10;
    // 즉시 실행함수에서 반환하면 someModule에 반환된다.. 즉 public 접근이 된다
    return {
        increase() {
            return ++number;
        },
        decrease() {
            return --number;
        }
    };
}());

console.log(someModule.increase());
console.log(someModule.decrease());
console.log(someModule.number); // undefined

