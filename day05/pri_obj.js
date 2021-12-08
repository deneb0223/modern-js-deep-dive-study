// 원사타입 리터럴로 const 키워드를 이용하여 변수 선언 시
const name = 'lee';
const age = 25;

// name = 'kim';   TypeError: Assignment to constant variable.
// 할당 에러가 발생한다

// 객체의 경우를 살펴보자
const person = { name, age };

console.log(`person : ${JSON.stringify(person)}`);

// person의 name 프로퍼티를 kim으로 변경한다.
person.name = 'kim';

// person의 name 프로퍼티가 kim으로 변경된 것을 확인할 수 있다.
if (person.name == 'kim')
    console.log(`person name is ${person.name}`);

// 원시타입을 지닌 변수에 불변성을 부여하는 것은 신뢰성을 높이는 효과가 있다.
// 하지만, 상태변화가 필요한 상황에서는 코드의 유연함을 저하시키는 단점이 존재한다.
// const를 이용하여 object를 선언하는 경우 조금 다른 결과가 나오게 되는데..