<template>
  <footer class="footer">
    <span class="footer-title">Shroogle Pty Ltd</span>
    <br />
    <span class="footer-content">Shroogle Pty Ltd | Level 1, 91 Williams St Melbourne VIC 3000 | Ph 1234 5678</span>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';
    .footer {
        font-family: Helvetica;
        color: $whiteFontColor;
        position: 'absolute';
        bottom: 0;
        left: 0;
        right: 0;
        height: '60px';
        width: 100%;
        background-color: $brandColor;
        text-align: center;
        line-height: 12px;

        .footer-title {
          font-size: 12px;
          font-weight: bold;
        }

        .footer-content {
          font-size: 10px;
        }

    }
</style>