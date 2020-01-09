<template lang="pug">
  .imageBackdrop(
    :style="{backgroundImage: 'url(' + imgUrl + ')'}"
    )
</template>
<script>
export default {
  name: 'ImageBackdrop',
  props: {
    imgUrl: {
      type: String,
      default: () => ''
    }
  }
}
</script>
<style lang="sass">
.imageBackdrop
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  width: 100%
  height: 100%
  position: relative
  display: block
  &:before
    content: ''
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 1
    background-color: rgba(black, .3)
</style>
