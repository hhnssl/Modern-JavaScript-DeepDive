// 객체 리터럴 {...}을 사용하면 객체를 쉽게 만들 수 있다.
// new 연산자와, 생성자 함수를 사용하면 유사한 객체 여러개를 쉽게 만들 수 있다.

// 생성자 함수
// 1. 함수의 이름의 첫글자는 대문자
// 2. 반드시 new 연산자를 붙여 실행

function User(name){
  this.name = name;
  this.isAdmin = false;
}

let user = new User("hansol");

console.log(user.name);
console.log(user.isAdmin);

// new User(...)로 함수를 실행하면 아래와 같은 알고리즘이 동작
// 1. 빈 객체를 만들어 this에 할당
// 2. 함수 본문을 실행. this에 새로운 프로퍼티를 추가하여 this를 수정
// 3. this 반환

