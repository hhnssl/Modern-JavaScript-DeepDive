function User(name){
  if(!new.target){ // new 없이 호출해도
    return new User(name); // new 를 붙여줌
  }
  this.name = name;
}

let hansol = User("한솔"); // new User을 쓴 것처럼 바꿔준다
console.log(hansol.name);

/*
그런데 이 방법을 믿고 객체를 만드는 경우에도 new를 생략하면 코드가 정확히 무슨 일을 하는지 알기 어렵습니다. new가 붙어있으면 새로운 객체를 만든다는 걸 누구나 알 수 있기 때문에 new를 생략해서 객체를 만드는것은 정말 필요한 경우에만 사용하시고 남발하지 않으시길 바랍니다.
*/


https://ko.javascript.info/constructor-new#ref-220