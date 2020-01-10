<template lang="pug">
  .pin(:class="[_pinClass, _pinSizeClass]")
    fondre(
      v-if="pinTextcopy"
      fondre-tag="h4"
      :fondre-style="pinFondreStyle"
      :fondre-textcopy="pinTextcopy"
    )
</template>
<script>
import Fondre from '../Fondre/Fondre'
import { FONDRE_STYLES } from '../Fondre/Const-fondre'
import { PIN_STYLE } from './Const-pin.js'
export default {
  name: 'Pin',
  components: {
    Fondre
  },
  props: {
    pinFondreStyle: {
      type: String,
      default: FONDRE_STYLES.F_XS
    },
    pinTextcopy: {
      type: [String, Number],
      default: () => ''
    },
    pinStyle: {
      type: [String, Number],
      default: () => ''
    },
    pinSize: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    _pinClass: function () {
      let pinClass = ''
      const arg = this.pinStyle
      if (PIN_STYLE[arg] === 0) {
        pinClass = ``
      } else {
        pinClass = `pin--${PIN_STYLE[arg]}`
      }

      return pinClass
    },
    _pinSizeClass: function () {
      return `pin--${this.pinSize}`
    }
  }
}
</script>
<style lang="sass">
.pin
  display: inline-flex
  border-radius: 14px
  color: white
  &--update
    background-color: orange
    text-transform: uppercase
    padding: 6px 8px
  &--online
    background-color: cadetblue
    border: 2px solid white

  &--offline
    background-color: gray
    border: 2px solid white

  &--small
    width: 10px
    height: 10px
  &--large
    width: 15px
    height: 15px
</style>
