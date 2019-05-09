import fake from './fake';

export default {
  name: 'uploadRegister',
  method: 'POST',
  path: '/test/register',
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
