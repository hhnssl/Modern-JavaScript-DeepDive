// == 동등연산자
// === 일치연산자
// 위의 두 연산자 모두, 변수명에 들어있는 메모리주소가 같은 객체를 가리키는지 판별한다

let a = {
  name: 'hansol',
}

let b = a;

console.log(a == b);
console.log(a === b);


//
let a2 = {};
let b2 = {};

console.log(a2 == b2);
console.log(a2 === b2);
