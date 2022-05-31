// 앞의 3번과 4번은 모든 프로퍼티가 원시값인 경우만 가정했다.
// 하지만 프로퍼티는 다른 객체에 대한 참조 값일 수도 있다.(중첩객체)
// 이 경우를 해결하는 방법은?

let user = {
  name: 'hansol',
  sizes: {
    height: 182,
    width: 50,
  }
};

// console.log(user.sizes.height);
// 단순히 아래와 같은 방법으로 복제할 수 없다. 왜냐?
// 주소값이 복사되어 들어가므로 결국 같은 sizes를 가리키게 되는 것이니까
let clone = {sizes: {}};
clone.sizes = user.sizes;
console.log(clone.sizes);


clone.sizes.height = 2;
console.log(clone.sizes);
console.log(user.sizes);
console.clear();

/* Object.assign을 사용해도 객체는 독립적인 복제가 안됨 */
let user2 = {
  name: 'hansol',
  sizes: {
    height: 182,
    width: 50,
  }
};
let clone2 = Object.assign({}, user2);
console.log(user2.sizes === clone2.sizes); // true 같은 객체를 가리키고 있다

user.sizes.width++;
console.log(clone.sizes.width);
// 위의 문제를 해결하려면 user[key]의 각 값을 검사하면서, 그 값이 객체인 경우 객체의 구조도 복사해주는
// 반복문을 사용해야한다. <== 깊은 복사라고 함
// 자스의 라이브러리 lodash의 메서드인 _.cloneDeep(obj)를 사용하면 깊은 복사를 할수있다.
console.clear();

let user3 = {
  name: 'hansol',
  sizes: {
    height: 182,
    width: 50,
  }
};

const _ = require("lodash");
let clone3 = _.cloneDeep(user3);
console.log(user3.sizes === clone3.sizes); //false