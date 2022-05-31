// 비동기 처리를 위한 콜백 패턴의 단점

// 서버의 응답 결과를 콘솔에 출력하는 함수
// 이 함수는 비동기 함수임. 비동기함수: 함수 내부에 비동기로 동작하는 코드를 포함한 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200){
      // 서버의 응답을 콘솔에 출력한다.
      console.log(JSON.parse(xhr.response));
    }else{
      console.error(`${xhrstatus} ${xhr.statusText}`);
    }
  };
};

//id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1');


