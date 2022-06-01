// calculator 라는 객체를 만들고 새 메서드를 구현해 봅시다.
// read()에선 프롬프트창을 띄우고 더할 값 두개를 입력받습니다.입력받은 객체의 프로퍼티에 저장합니다.
// sum()은 저장된 두 값의 합을 반환합니다.
// mul()은 저장된 두 값의 곱을 반환합니다.

const { sum } = require("lodash");

let calculator = {
  read(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  },

  sum(){
    return this.num1 + this.num2;
  },

  mul(){
    return this.num1 * this.num2;
  }
};

calculator.read(4, 8);
console.log(calculator.sum());
console.log(calculator.mul());