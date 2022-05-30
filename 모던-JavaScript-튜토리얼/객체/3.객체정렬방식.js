// 객체는 '특별한 방식으로 정렬됨'
// 정수 프로퍼티는 자동 정렬, 
// 그 외의 프로퍼티는 추가한 순서 그대로 정렬

let codes = {
  "49": "독일",
  "41": "스위스", 
  "44": "영국",
  "1": "미국",
};


for(let code in codes){
  console.log(code); // 결과가 숫자 오름차 정렬 됐음을 알 수 있다
}

/* 추가한 순서대로 출력되는 정수 외의 프로퍼티 */
console.log("정수가 아닌 프로퍼티 나열");
let user = {
  name: 'hansol',
  surname: 'oh',
};

user.age = 28;
user.address = 'sungnam'

for(let i in user){
  console.log(i);
}

/* 정수 프로퍼티도 추가한 순서대로 정렬하는 간단한 방법 */
console.log("숫자 앞에 + 기호를 붙인다!");
let codes2 = {
  "+49": "독일",
  "+41": "스위스", 
  "+44": "영국",
  "+1": "미국",
};


for(let code2 in codes2){
  console.log(+code2); // 키 변수에도 +를 붙여줘야함
}


// /* 참고
// 정수 프로퍼티: 변형 없이 정수에서 왔다 갔다 할 수 있는 문자열을 뜻함. +49, 1.2 같은 것은 정수 프로퍼티가 아님 */
// // 소수점 아래를 버리고 정수부만 반환하는 Math.trunc를 이용하여 확인해보기
// console.log("정수 프로퍼티가 뭔지 확인하기");
// console.log(String(Math.trunc(Number("49"))));
// console.log(String(Math.trunc(Number("+49"))));
// console.log(String(Math.trunc(Number("4.9"))));
// // 위와 같이 본래의 값을 변화 없이 가질 수 있는 애들을 정수 프로퍼티라 함