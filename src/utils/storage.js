// 用于本地存储的存取删清

export default {
  set(name, value) {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch(e) {
      this.exception(e);
    }
  },
  get(name) {
    try {
      const data = localStorage.getItem(name);
      return data !== null ? JSON.parse(data) : data;
    } catch(e) {
      this.exception(e);
    }
  },
  remove(name) {
    try {
      localStorage.removeItem(name);
      return true;
    } catch (e) {
      this.exception(e);
    }
  },
  clear() {
    try {
      localStorage.removeItem(name);
      return true;
    } catch (e) {
      this.exception(e);
    }
  },
  exception: (e) => {
    console.log(e);
  },
};

/*
  how to use ?

  存
  storage.set('people', { name: 'jeo', age: 23 });
  storage.set('name', 'jeo')

  取
  storage.get('people');

  删除people这一项
  storage.remove('people');

  删除所有
  storage.clear(); 用于清除store所有
*/
