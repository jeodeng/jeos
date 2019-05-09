import common from './common';

const $http = {
  common,
};
// $http.test = function test(params = {}) {
//   console.log(common, 'common');
//   const payload = Object.assign({ testId: '222' }, params);
//   return new Promise((resolve, reject) => {
//     axios.get(`/api/user`, {
//       param: payload,
//     }).then((res) => {
//       // console.log(res);
//       resolve(res);
//     }).catch((err) => {
//       // console.log(err, 'Error');
//       reject(err);
//     });
//   });
// };

export default $http;
