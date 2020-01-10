<template lang="pug">
.horizontalScroll-parent(:style="{height: parentHeight + 'px'}")
  .horizontalScroll-child(:style="{height: childHeight + 'px'}")
    slot
</template>
<script>
export default {
  name: 'HorizontalScroll',
  props: {
    childHeight: {
      type: Number,
      default: () => ''
    },
    parentHeight: {
      type: Number,
      default: () => ''
    }
  }
}
</script>
<style lang="sass" scoped>
.horizontalScroll
  &-parent
    overflow: hidden
  &-child
    display: flex
    width: 100%
    overflow-x: scroll
    white-space: nowrap

    > *
      white-space: normal //to cancel the white-space to all decendants
</style>
