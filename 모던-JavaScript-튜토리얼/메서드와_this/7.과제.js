// 객체 리터럴에서 this 사용하기
// 함수 makeUser는 객체를 반환합니다.
// 이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

function makeUser(){
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();
console.log(user.ref.name);

// 내 답
/*
  user = {
    name: "John",
    ref: this (user)
  }
  상태가 되었으므로, 결과로 John 이 출력될 것이다!
*/

// 해답
// 에러가 발생한다! undefined 출력
// 에러가 발생하는 이유: this 값을 설정할 땐, 객체 정의가 사용되지 않았기 때문
// this값은 호출 시점에 결정된다.
// 위 코드에서 makeUser() 내 this는 undefined가 된다. 메서드로써 호출된 게 아니라, 함수로써 호출되었기 때문


/* 에러 발생하지 않게 코드 수정하히 */
function makeUser2(){
  return {
    name: "john",
    ref(){
      return this;
    }
  };
};

let user2 = makeUser2();
console.log(user2.ref().name);