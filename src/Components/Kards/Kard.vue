<template lang="pug">
.kard

  .kard-pin(v-if='kardPin !== 0')
    pin(:pin-textcopy="_kardPin")

  .kard-photo
    ImageBackdrop(:imgUrl='kardPhotoUrl')

  .kard-text
    fondre(:fondre-style="kardTextStyle" fondreTag="h3" :textcopy="kardTextcopy")

</template>
<script>
import ImageBackdrop from '../ImageBackdrop/ImageBackdrop.vue'
import Fondre from '../Fondre/Fondre.vue'
import Pin from '../Pin/Pin'
import { FONDRE_STYLES } from '../Fondre/Const-fondre'
import { PIN_TEXTCOPY } from '../Pin/Const-pin-textcopy'
export default {
  name: 'Kard',
  components: {
    ImageBackdrop,
    Fondre,
    Pin
  },
  props: {
    kardPhotoUrl: {
      type: String,
      default: () => ''
    },
    kardTextStyle: {
      type: String,
      default: FONDRE_STYLES.F_S
    },
    kardTextcopy: {
      type: String,
      default: () => ''
    },
    kardPin: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    _kardPin: function () {
      const arg = this.kardPin
      return PIN_TEXTCOPY[arg]
    }
  }
}
</script>

<style lang="sass">
.kard
  display: inline-flex
  flex-wrap: wrap
  flex-direction: column
  position: relative
  &-photo
    width: 100px
    height: 150px
    border-radius: 15px
    overflow: hidden
  &-text
    position: absolute
    bottom: 10px
    left: 10px
    right: 10px
    color: white
    z-index: 2
    color: white
  &-pin
    position: absolute
    top: 10px
    right: 10px
    z-index: 2
</style>
