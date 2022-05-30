// https://ko.javascript.info/object

/**
 * undefined가 있는데 in 연산자가 따로 있는 이유
 * === undefined 와 같은 방법이 가끔 실패할 때도 있기 때문
 * 
 * in을 사용하면 프로퍼티 존재 여부를 제대로 판별할 수 있다.
 */

// in 연산자 사용 법
let user = {
  name: 'hansol',
  age: 28,
};

// "프로퍼티값" in 객체
console.log('name' in user);
console.log('age' in user);
console.log('address' in user); // false


// === undefined 결과 값이 원하는 대로 나오지 않는 경우
let obj = {
  text: undefined
};

console.log(obj.test);
console.log("text" in obj);