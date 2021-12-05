// score를 메모리에 할당한다. 별도의 선언이 없으니 <undefined>로 선언됨
console.log(score)  // undefined

// score에 80이 할당, 이때 score는 undefined가 할당된 메모리주소가 아닌 새로운 공간에 할당한다.
score = 80
console.log(score)  // 80
var score

console.log(score) // 80