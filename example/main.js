import Vue from 'vue';
import App from './App';
import vueMeow from '../lib/vue-meow.js';

console.log(vueMeow);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
