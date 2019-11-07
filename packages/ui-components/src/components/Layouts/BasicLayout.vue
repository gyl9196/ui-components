<template>
<div>
  <Header />
  <div class="content">
    <slot></slot>
  </div>
  <Footer />
</div>
</template>

<script>
import Header from '../Elements/Header/Header.vue'
import Footer from '../Elements/Footer/Footer.vue'
export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
   
}
</style>