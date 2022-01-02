const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
};
// 객체
console.log(obj); //property는 문자열을 기준으로 자동으로 정렬된다.
// 배열의 경우
// forEach()를 사용할 수 있다.
const arr = [1, 2, 3];
console.log(arr);
arr.x = 100;    // 배열도 객체이기 때문에 프로퍼티를 지정/보유 할 수 있다
console.log(arr);

// 요소가 아닌 프로퍼티는 제외한다
arr.forEach(ele => console.log(ele));

// of 키워드 역시 요소가 아닌 프로퍼티는 제외한다
for (ele of arr) {
    console.log(ele)
}

const person = {
    name: 'Kim',
    address: 'Suwon',
    __proto__: {
        age : '20'
    }
};

console.log(Object.keys(person));
Object.entries(person).forEach(
    ([k, v]) => console.log(`${k} : ${v}`));