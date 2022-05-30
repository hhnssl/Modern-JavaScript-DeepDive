// 답 못 맞춤!!!! 다시 해보자!!

/* 
  객체가 비어있는지 확인하기
  
  객체에 프로퍼티가 하나도 없는 경우 true,
  그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요
*/

function isEmpty(obj){
  for(let key in obj){ // for문이 동작한다는 것은 프로퍼티가 하나라도 있다는 뜻이므로
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); //true가 나와야 함
// console.log(schedule);


schedule["8:30"] = "get up"; // 객체에 프로퍼티 추가
// console.log(schedule);

console.log(isEmpty(schedule)); // false가 나와야 함


