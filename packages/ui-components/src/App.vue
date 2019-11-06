<template>
  <div id="app">
    <Test />
  </div>
</template>

<script>

import Footer from './components/Elements/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Test: Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
