import { driveHttps } from '@';
import getPeople from './getPeople';
import uploadLogin from './uploadLogin';
import uploadRegister from './uploadRegister';

const common = new driveHttps({
  maps: [
    getPeople,
    uploadLogin,
    uploadRegister,
  ],
  config: {
    domain: '/api',
    timeout: 10000,
    hasFake: false, // 是否开启数据模拟
    fakeDelay: 1500, // 假数据返回时间
    fakeDataStruct: data => ({ // 假数据格式构造函数，data就是指fake.js输出的数据
      code: '1',
      msg: '',
      data,
    }),
  },
  // 统一所有接口，在发送前进行操作，
  sendBefore(payload) {
    return payload;
    // console.log(payload);
  },
});

export default common;

// export default vueMoo.drives.httpApater({
//   // api接口及其payload的预定义
//   maps: {
//     getUserRole,
//   },
//   // 服务配置
//   config: {
//     domain: '',
//     hasFake: false,
//     fakeDelay: 1500,
//     fakeDataStruct: data => ({
//       code: '999999',
//       msg: '',
//       data,
//     }),
//   },
//   sendBefore(payload) {
//     return payload;
//     // console.log(payload);
//   },
//   setPayload(payload) {
//     return payload;
//     // console.log(payload);
//   },
//   setHeaders(headers) {
//     const newHeaders = Object.assign({}, headers);
//     newHeaders['Content-Type'] = 'application/json';
//     return newHeaders;
//   },
// });
