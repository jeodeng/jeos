import fake from './fake';

export default {
  name: 'getPeople', // 人员信息
  method: 'GET',
  path: '/test/getPeople',
  origin: {
    userId: 'admin',
    sex: '男',
  },
  alias: {
    userId: 'userId',
    sex: 'sexName',
  },
  fake,
};
