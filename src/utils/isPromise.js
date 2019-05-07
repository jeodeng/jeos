// 用于判断是否promise对象

export default function isPromise(obj) {
  return obj instanceof Promise ||
  (typeof obj.then === 'function' && typeof obj.catch === 'function');
}
