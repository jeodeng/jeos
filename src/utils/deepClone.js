/*
  一个简单的复制
  只是用作数据复制，一般业务传参都是数组对象，请不要纠结这个深复制的全面性
*/

export default function deepClone(target) {
  // 在这里简单判断一下类型
  if (typeof target !== 'object' || target === null) return target;

  // 判断是数组还是对象
  const temp = target instanceof Array ? [] : {};

  // 循环递归
  Object.keys(target).forEach((key) => {
    temp[key] = typeof target[key] === 'object' ? deepClone(target[key]) : target[key];
  });

  // 返回新对象
  return temp;
}
