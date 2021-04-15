export function cloneArray(a, fn) {
  const keys = Object.keys(a);
  const a2 = new Array(keys.length);
  for (const item of keys) {
    const cur = a[item];
    if (typeof cur !== 'object' || cur === null) {
      a2[item] = cur;
    } else {
      a2[item] = fn(cur);
    }
  }
  return a2;
}

export function clone(o) {
  if (typeof o !== 'object' || o === null) return o;
  if (Array.isArray(o)) return cloneArray(o, clone);
  const o2 = {};
  for (const k in o) {
    if (Object.hasOwnProperty.call(o, k) === false) continue;
    const cur = o[k];
    if (typeof cur !== 'object' || cur === null) {
      o2[k] = cur;
    } else {
      o2[k] = clone(cur);
    }
  }
  return o2;
}
