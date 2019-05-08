<template>
  <div id="app">
    Welcome to Use
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    test() {
      this.msg = 'test';
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
