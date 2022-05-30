// 객체의 모든 '키'를 순회할 수 있는 for in 문

let obj = {
  name: 'hansol',
  age: 28,
  address: 'sungnam',
  isWoman: true,
};

for(key in obj){
  // console.log(key);
  // console.log(obj[key]);
}


// key 말고 다른 변수명을 사용해도 가능
for(aa in obj){
  // console.log(aa);
}

// 자료형을 붙여도 가능
for(let bb in obj){
  console.log(bb);
}