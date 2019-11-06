<template>
  <footer class="footer">
    <span>Shroogle Pty Ltd ABN 71 629 833 432 | Level 1, 91 William Street, Melbourne VIC 3000 Australia | Credit Representative of SJM Financial Solutions Pty Ltd t/as Resicom Pty Ltd | Australian Credit Licence Number 389191</span>
    <br />
    <span>Copyright © {{ new Date().getFullYear() }}| All rights reserved</span>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';
    footer {
        position: 'absolute';
        bottom: 0;
        left: 0;
        right: 0;
        height: '40px';
        width: 100%;
        font-size: 10px;
        background-color: $brandColor;
        color: $disabledColor;
        text-align: center;
        line-height: 12px;
    }
</style>