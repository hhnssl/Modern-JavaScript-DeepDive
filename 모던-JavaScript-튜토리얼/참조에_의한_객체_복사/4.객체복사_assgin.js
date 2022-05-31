// Object.assign (얕은 복제)
// 사용법: Object.assign(dest, [src1, src2...])
// dest: 목표로하는 객체
// src1~ : 복사하고자하는 객체
// src1 의 프로퍼티를 dest에 복사한다. 그러면 dest를 제외한 인수(객체)의 프로퍼티 전부가 첫번째 인수(객체)로 복사됨

let user = {
  name: 'hansol'
};

let permission1 = {
  canView: true,
};

let permission2 = {
  canEdit: true,
};

//permission1과 permission2의 프로퍼티를 user로 복사한다.
Object.assign(user, permission1, permission2);
console.log(user);



// 목표 객체(user)에 동일한 이름의 프로퍼티가 있으면 기존값에 덧 씌워진다.
Object.assign(user, {name: 'oh'});
console.log(user);


// 반복문 없이도 간단하게 객체 복사하기
let clone = Object.assign({}, user);
console.log(clone);
console.log(user.name === clone.name);

clone.name = 'pd';
console.log(user.name);
console.log(clone.name);