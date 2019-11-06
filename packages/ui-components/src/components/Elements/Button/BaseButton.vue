<template>
  <button @click="onClick">
    <slot>{{name}}</slot>
  </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        name: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';
    button {
        font-size: 16px;
        font-weight: 600;
        padding-left: 27px;
        padding-right: 27px;
        max-width: 100%;
        max-height: 100%;
        margin: 0;
        background-color: $secondaryColor;
        &:focus {
            outline: none;
  }
    }
</style>