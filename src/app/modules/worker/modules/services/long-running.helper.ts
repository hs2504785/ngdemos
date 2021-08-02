export function crazyBusyFunction(num: number) {
  let res;
  for (var i = 0; i <= num; i += 0.1) {
    res = performance.now();
  }
  return res;
}

export function keepCounting(cb, times = 1000000000) {
  for (var x = 1; x <= times; x++) {
    var y = x / 3.2;
    if (x % 20000000 == 0) {
      cb(x);
    }
  }
}
