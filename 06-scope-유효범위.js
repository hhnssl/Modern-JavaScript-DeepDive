var x = 'global';

function foo(){
  var x = 'local';

  console.log(x); //local
}

// if(true){
//   var x = 'if문';
//   console.log(x);
// }

foo();
console.log(x); //global

