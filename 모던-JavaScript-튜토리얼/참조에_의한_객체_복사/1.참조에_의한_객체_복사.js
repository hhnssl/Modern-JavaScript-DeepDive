// 객체와 원시 타입의 근본적인 차이 중 하나: 객체는 '참조에 의해' 저장되고 복사되는 반면에,
// 원시값은 '값 그대로' 저장 및 할당되고 복사된다
// 객체의 변수명은 값이 아닌, 값이 담긴 '메모리 주소'를 가지고 있다.
// 그래서 변수명으로 메모리 주소를 알아내어 객체를 참조하는 것


let user = {
  name: 'hansol',
}

let another = user; // 값인 name: 'hansol'이 아니라 '주소값'을 복사해 저장. 결과적으로는 user와 another이 같은 객체를 가리키게 됨

another.name = 'oh';

console.log(another.name);
console.log(user.name); //another의 name을 바꿨는데, user의 name도 바뀐 것을 확인할 수 있다. 내용물이 똑같은 객체이기 때문