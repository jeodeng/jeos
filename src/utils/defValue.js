import isEmpty from './isEmpty';
import deepClone from './deepClone';

export default function defValue(val, defVal) {
  return isEmpty(val) ? defVal : deepClone(val);
}

/*

  该方法用于给指定变量赋予默认值
  对于val进行非空校验，空数组[]，空对象{}都被判断为空，若为空则赋予defValue，否则即为val
  避免重复写 val || '' 类似的代码，而且这么写，val为数字 0 时会有问题
  const age = defVal(people.age, 18);
  如果 people.age 有值且不为 null, {}, [], '' 这样的空值，则为people.age，否则给予默认值18

*/
