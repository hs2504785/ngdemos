/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  let i = 0;
  const arr = [];
  for (i; i < data; i++) {
    arr.push(i);
  }
  postMessage(arr);
});
