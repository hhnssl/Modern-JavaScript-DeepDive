// 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있다.
// this는 객체를 나타낸다. (클래스에는 인스턴스를 나타냄)

let user ={
  name: "John",
  age: 30,
  sayHi(){
    // this는 '현재 객체'를 나타냅니다.
    console.log(this.name);
  }
};

user.sayHi(); // <- 얘가 실행되는 동안에 this는 user을 나타냄



// this를 사용하지 않고, 외부 변수를 참조해 객체에 접근하기
let user2 ={
  name: "John",
  age: 30,
  sayHi(){
    console.log(user2.name); // <- 다른 부분 | this이면 admin.sayHi 오류가 발생하지 않는다.
  }
};
let admin = user2;
user2 = null; // user2을 null로 덮어씀

admin.sayHi(); // user2를 참조하여 에러가 발생함
