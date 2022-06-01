// 화살표 함수는 일반함수와는 달리 '고유한 this'를 가지지 않는다.
// 화살표 함수에서 this를 참조하면 화살표 함수가 아닌 '평범한 외부 함수'에서 this값을 가지고 온다.


// 아래 예시에서 함수 arrow()의 this는 외부 함수 user.sayHi()의 this가 된다.
let user = {
  firstName: '한솔',
  sayHi(){
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi();