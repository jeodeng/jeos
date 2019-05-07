import isEmpty from './isEmpty';

export default function formatDate(date = null, express = 'YYYY-MM-DD HH-II-SS') {
  if (typeof express !== 'string' || isEmpty(express)) throw new TypeError('formateDate 函数，第二个参数必须为YYYY-MM-DD HH-II-SS格式字符串');
  const setter = typeof date === 'object' && date !== null ? `${date.year}/${date.month}/${date.day}` : date;
  const t = typeof setter === 'number' || typeof setter === 'string' ? new Date(setter) : new Date();

  const Y = t.getFullYear();
  const M = t.getMonth() + 1;
  const D = t.getDate();
  const H = t.getHours();
  const I = t.getMinutes();
  const S = t.getSeconds();

  let e = express;
  e = e.replace(/YYYY/g, Y);
  e = e.replace(/YY/g, Y.toString().substr(2, 4));
  e = e.replace(/MM/g, M < 10 ? '0' + M : M);
  e = e.replace(/M/g, M);
  e = e.replace(/DD/g, D < 10 ? '0' + D : D);
  e = e.replace(/D/g, D);
  e = e.replace(/HH/g, H < 10 ? '0' + H : H);
  e = e.replace(/H/g, H);
  e = e.replace(/II/g, I < 10 ? '0' + I : I);
  e = e.replace(/I/g, I);
  e = e.replace(/SS/g, S < 10 ? '0' + S : S);
  e = e.replace(/S/g, S);

  return e;
};

// 使用方法 formatDate(date, 'YYYY-MM-DD');
// 第一个参数为 毫秒数 第二个为时间格式，默认为 年-月-日 时-分-秒 格式, 可传'YYYY-MM-DD'
