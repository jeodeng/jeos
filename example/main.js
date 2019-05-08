import Vue from 'vue';
import App from './App';
import vueMeow from 'vue-meow';

console.log(vueMeow);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
