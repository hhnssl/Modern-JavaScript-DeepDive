// 객체를 참조하지 않고 독립적인 다른 공간에 복사하는 방법
// 자스는 객체 복제 내장 메서드를 지원하지 않는다 (잘 쓰이지도 않는다고 함)
// 정말 복제가 필요하다면 새로운 객체를 만들어서 기존 객체의 프로퍼티를 순회하여, 원시수준까지 프로퍼티를 복사하면 된다.

let obj = {
  one: 1,
  two: 2,
  three:3,
};

let copyObj = {};

for(let key in obj){
  // console.log(`copyObj[key] = obj[key] => ${copyObj[key]} = ${obj[key]}`);
  // console.log(key);
  copyObj[key] = obj[key];
}

// console.log(obj);
// console.log(copyObj);

copyObj.one = 'one'
console.log(obj.one);
console.log(copyObj.one);