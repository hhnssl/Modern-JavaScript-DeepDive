function User(name){
  // this = {}; // 빈 객체가 암시적으로 만들어짐

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this; // this가 암시적으로 반환됨
}

let user = new User("hansol"); // 는 아래 코드를 입력한 것과 동일하게 동작 함

/*
let user = {
  name: 'hansol',
  isAdmin: false,
};
*/


// 생성자의 의의: 재사용할 수 있는 객체 생성 코드 구현
// 참고로 모든 함수는 생성자 함수가 될 수 있다. new를 붙여 실행한다면 어떤 함수라도 위에 1에서 언급된 알고리즘이 실행된다.
