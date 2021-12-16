const some = { 
    'key' : 1 ,
    'key2' : 2,
    'key3' : 3
};

//defineProperty 기능을 이용하여 프로퍼티 디스크립터를 수정할 수 있다.
Object.defineProperty(some, "key4", {
    value: 4,
    enumerable: false,
    configurable: false
  });

console.log(Object.getOwnPropertyDescriptor(some, 'key'));
//{ value: 1, writable: true, enumerable: true, configurable: true }
// 요약하자면 프로퍼티의 상태값을 나타낸다..

// 객체 내 프로퍼티에 대한 기술 정보를 보고 싶다면
console.log(Object.getOwnPropertyDescriptors(some));
//   key: { value: 1, writable: true, enumerable: true, configurable: true },
//   key2: { value: 2, writable: true, enumerable: true, configurable: true },
//   key3: { value: 3, writable: true, enumerable: true, configurable: true }

// 자바스크립트는 get/set를 지정하는 프로퍼티 어트리뷰트가 별도로 있다

const person = {
    firstName : 'Lee',
    lastName : 'Kangwoon',
    
    // getter
    get fullName() {
        return `${this.firtName} + ${this.lastName}`;
    },
    // setter
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }

    // 여기서 사용한 디스크립터는 get/set이다.
};

console.log(person.firstName + ' ' + person.lastName);
person.lastName = 'Gwangwoon';
console.log(person);      // lastName 'Gwangwoon'으로 변경
// 추가적으로 프로퍼티으 기술자는 fullName: [Getter/Setter]으로 확인할 수 있다

console.log(person.fullName);