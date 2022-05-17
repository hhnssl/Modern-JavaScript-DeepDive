let x = 'global';

function foo(){
  let x = 'local';

  console.log(x); //local
}

// if(true){
//   let x = 'if문';
//   console.log(x);
// }

foo();
console.log(x); //global

