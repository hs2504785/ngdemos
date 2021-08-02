/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log(`in worker EventListener : ${data}`);
  for (var x = 1; x <= 1000000000; x++) {
    var y = x / 3.2;
    if (x % 20000000 == 0) {
      postMessage(x);
      // don't need console any more --> console.log(x);
    }
  }
});
