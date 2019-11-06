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
  },
  data () {
    return {
      imgUrl: 'https://shroogle.com.au/wp-content/uploads/2019/03/Shroogle-logo-web-white-1.svg' 
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center
}
</style>