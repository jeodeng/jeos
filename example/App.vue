<template>
  <div id="app">
    <div class="">
      <button type="button" name="button" @click="init">按钮1</button>
      <button type="button" name="button" @click="init">按钮2</button>
      <button type="button" name="button" @click="init">按钮3</button>
    </div>
  </div>
</template>

<script>
import http from './adapter';
import { owUtils } from 'vue-meow';

export default {
  name: 'App',
  data() {
    return {
      msg: '',
    };
  },
  computed: {
    data() {
      return localStorage.getItem('people');
    },
  },
  methods: {
    init() {
      owUtils.storage.set('people', { name: '张三', sex: '男' });
    },
    update() {
      owUtils.storage.set('people', { name: '李四', sex: '女' });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: green;
  margin-top: 60px;
}
</style>
