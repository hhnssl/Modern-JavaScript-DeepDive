/**
 * 다음 각 동작을 한 줄씩, 코드로 작성해보세요.

빈 객체 user를 만듭니다.
user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
name의 값을 Pete로 수정해보세요.
user에서 프로퍼티 name을 삭제하세요.
 */

let user = {};
console.log(user);


user.name = "John";
console.log(user);


user.surname = "Smith";
console.log(user);


user.name = "Pete";
console.log(user);


delete user.name;
console.log(user);