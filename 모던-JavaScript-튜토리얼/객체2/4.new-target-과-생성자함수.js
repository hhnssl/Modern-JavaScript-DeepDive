// new.target 프로퍼티를 사용하면 함수가 new와 함께 호출되었는지 아닌지를 알 수 있다.
// 일반적인 방법으로 함수 호출하면 new.tagert은 undefined 반환
// new 와 함께 호출한 경우에는 new.target 함수 자체를 반환

function User(){
  console.log(new.target);
}

//new 없이 호출함
User(); // undefined


// new 붙여서 호출
new User();