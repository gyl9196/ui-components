<template>
  <div id="app">
    <Header />
    <Test />
  </div>
</template>

<script>
import Header from './components/Elements/Header/Header'
import Footer from './components/Elements/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Test: Footer,
    Header
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
