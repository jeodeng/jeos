// 判断变量是否为空值
export default function isEmpty(val) {
  return val === '' ||
  val === null ||
  val === 'null' ||
  JSON.stringify(val) === '{}' ||
  JSON.stringify(val) === '[]' ||
  typeof val === 'undefined';
}

// 碰到很多次后台数据库直接存null了，之后直接给前端一个null字符串，出于实际应用场景考虑，在这里也加上了'null'的判断
