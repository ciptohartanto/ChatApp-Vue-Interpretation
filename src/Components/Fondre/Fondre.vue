<template lang="pug">
  component(:is="fondreTag" :class="_fondreStyle") {{fondreTextcopy}}
</template>
<script>
import { FONDRE_STYLES } from './Const-fondre.js'
export default {
  name: 'Fondre',
  props: {
    fondreTag: {
      type: String,
      default: () => '',
      validator: function (value) {
        const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'a', 'span']
        return allowedTags.indexOf(value) !== -1
      }
    },
    fondreTextcopy: {
      type: [String, Number],
      default: () => ''
    },
    fondreStyle: {
      type: String,
      default: FONDRE_STYLES.F_L
    }
  },
  computed: {
    _fondreStyle: function () {
      return `fondre--${this.fondreStyle}`
    }
  }
}
</script>

<style lang="sass">
.fondre
  &--xSmall
    font-size: 12px
  &--small
    font-size: 14px
  &--medium
    font-size: 16px
  &--large
    font-size: 20px
  &--xLarge
    font-size: 28px
    font-weight: bold
</style>
