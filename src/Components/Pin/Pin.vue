<template lang="pug">
  .pin(:class="_pinClass")
    fondre(
      fondre-tag="h4"
      :fondre-style="pinFondreStyle"
      :textcopy="pinTextcopy"
    )
</template>
<script>
import Fondre from '../Fondre/Fondre'
import { FONDRE_STYLES } from '../Fondre/Const-fondre'
import { PIN_TEXTCOPY } from './Const-pin-textcopy'
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
      type: String,
      default: () => ''
    }
  },
  computed: {
    _pinClass: function () {
      let pinClass = ''

      if (PIN_TEXTCOPY.NOTHING) {
        pinClass = ''
      } else {
        pinClass = `pin--${this.pinTextcopy}`
      }

      return pinClass
    }
  }
}
</script>
<style lang="sass">
.pin
  display: inline-flex
  background-color: red
  padding: 6px 8px
  border-radius: 14px
  color: white
  text-transform: uppercase
</style>
