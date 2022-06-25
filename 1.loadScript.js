function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);

  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('./');
