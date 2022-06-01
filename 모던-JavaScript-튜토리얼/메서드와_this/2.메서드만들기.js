let user = {
  name: "John",
  age: 30,
};

user.sayHi = function(){
  console.log("HI!!!!!");
};

user.sayHi();
console.log(user);

// 이미 만들어둔 함수를 객체에 할당할 수도 있다.
function sayHello(){
  console.log("Hello!!");
};

user.sayHello = sayHello;
user.sayHello();
console.log(user);
