import defValue from './defValue';
import isEmpty from './isEmpty';
import deepClone from './deepClone';
import isPromise from './isPromise';
import storage from './storage';
import firstUppercase from './firstUppercase';
import formatDate from './formatDate';

export default {
  defValue, // 非空默认
  isEmpty, // 空值校验
  deepClone, // 深复制
  storage, // 本地存储
  isPromise, // 是否为Promise对象
  formatDate, // 格式化时间
  firstUppercase, // 首字母大写
};
