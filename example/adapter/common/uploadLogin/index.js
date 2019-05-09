import fake from './fake';

export default {
  name: 'uploadLogin',
  method: 'POST',
  path: '/test/login',
  origin: {
    usn: 'admin',
    psw: 'adminadmin',
  },
  alias: {
    usn: 'username',
    psw: 'password',
  },
  fake,
};
