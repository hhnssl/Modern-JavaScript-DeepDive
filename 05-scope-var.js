let var1 = 1;

if(true){
  var var2 = 2;
  if(true){
    var var3 = 3;
  }
}

function foo(){
  var var4 = 4;

  function foo2(){
    var var5 = 5;
  }
}

// var는 if문 코드블럭 안에 쓰인 애들은 밖에서도 참조할 수 있구나..!
console.log(var1);
console.log(var2);
console.log(var3);
// console.log(var4);
// console.log(var5);