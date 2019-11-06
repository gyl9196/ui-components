<template>
  <header class="header">
      <img :src="imgUrl"/>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        imgUrl: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';
    .header {
        height: 60px;
        width: 100%;
        background-color: $brandColor;
        img {
            vertical-align: middle;
            display: inline-block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            &:hover,
            &:focus {
                cursor: pointer;
            }
            margin-left: 20px;
            height: 35px;

            @media (max-width: $mobileMax) {
                margin-left: 15px;
                height: 22px;
            };
        }
    }
</style>