import axios from 'axios';
import { deepClone } from '../utils';

// 支持的请求类型
const methods = ['post', 'get', 'delete', 'head', 'request', 'put', 'patch'];

class driveHttps {
  constructor(options) {
    const { maps, config } = options;

    Object.assign(this, options);

    return this.init();
  }

  init() {

    // 请求集合
    const https = new Object();

    // 实例化axios
    const request = this.requestInit();

    this.maps.map((api) => {
      // 转换大小写
      const method = api.method.toLowerCase();

      // 验证是否支持请求
      if (methods.indexOf(method) < 0) throw new Error(`暂不支持${ method }请求`);

      // 定义请求
      const http = request[method];

      if (!api.name) return false;

      // 判断是否开启假数据模拟
      if (this.config.hasFake) {
        https[api.name] = this.fakeInit(api);
      } else {
        // 把请求函数写入集合
        https[api.name] = function fn (params = {}) {

          // 定义请求参数
          const payload = Object.assign({}, api.origin);

          // 参数别名匹配
          Object.entries(api.alias).forEach((kv) => {
            const [k, v] = kv;
            if (payload[k] !== undefined) payload[k] = deepClone(params[v]) || payload[k];
          });

          return new Promise((resolve, reject) => {
            http(api.path, {
              params: payload,
            }).then(res => resolve(res)).then(err => reject(err));
          });
        }
      }

      return true;
    });
  }

  requestInit() {
    const { config } = this;

    const request = axios.create({
      baseURL: config.domain || '',
      timeout: config.timeout || 3000,
    });

    return request;
  }

  fakeInit(api) {
    const { config } = this;

    return () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(config.fakeDataStruct(api.fake || {}));
        }, config.fakeDelay || 2000);
      });
    }
  }
}

function driveHttpss(options) {

  // 检验maps是否是个数组
  if (!options.maps || Object.prototype.toString.call(options.maps) !== '[object Array]') throw new TypeError('配置中的maps必须是个数组');

  const {
    maps,
    config,
  } = options;

  // 请求集合
  const https = new Object();

  // axios实例
  const request = axios.create({
    baseURL: config.domain || '',
    timeout: config.timeout || 3000,
  });

  maps.forEach((api) => {
    // 转换大小写
    const method = api.method.toLowerCase();

    // 验证是否支持请求
    if (methods.indexOf(method) < 0) throw new Error(`暂不支持${ method }请求`);

    // 定义请求
    const http = request[method];

    if (!api.name) return false;

    // 判断是否开启假数据模拟
    if (config.hasFake) {
      https[api.name] = function fn () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(config.fakeDataStruct(api.fake || {}));
          }, config.fakeDelay || 2000);
        });
      }
    } else {
      // 把请求函数写入集合
      https[api.name] = function fn (params = {}) {

        // 定义请求参数
        const payload = Object.assign({}, api.origin);

        // 参数别名匹配
        Object.entries(api.alias).forEach((kv) => {
          const [k, v] = kv;
          if (payload[k] !== undefined) payload[k] = deepClone(params[v]) || payload[k];
        });

        return new Promise((resolve, reject) => {
          http(api.path, {
            params: payload,
          }).then(res => resolve(res)).then(err => reject(err));
        });
      }
    }

  });

  return https;
};
export default driveHttps;
