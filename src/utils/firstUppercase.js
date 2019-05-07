// 首字母大写
export default function firstUppercase(str) {
  if (typeof str !== 'string') return str;
  const firstLetter = str.charAt(0);
  return `${firstLetter.toUpperCase()}${str.substr(1, str.length)}`;
}
