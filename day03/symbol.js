var name = Symbol('name');
var age = Symbol('age');

const user2 = {};
user2[name] = 'kim';
user2[age] = 21;

console.log(user2);
user2[age] = 30;
console.log(user2);