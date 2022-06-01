// 자스에서는 다른 프로그래밍 언어와 달리, 모든 함수에 this를 사용할 수 있다.
// 아래와 같이 코드를 작성해도 문법 에러가 발생하지 않는다.
// this 값은 런타임에 결정된다. == 컨텍스트에 따라 달라진다
// 동일한 함수라도, 다른 객체에서 호출했다면, this가 참조하는 값이 달라진다.


function sayHi(){
  console.log(this.name);
}

let user = {
  name: "John",
};

let admin = {
  name: "Admin",
};

function sayHello(){
  console.log(this.name);
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHello;
admin.f = sayHello;

// 'this'는 '점 앞의 객체'를 참조하기 때문에, this 값이 달라진다. f를 호출하는 동안의 객체를 this가 가리킴
user.f(); 
admin.f();

admin['f'](); // Admin (점과 대괄호는 동일하게 동작한다.)