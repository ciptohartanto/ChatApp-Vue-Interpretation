<template lang="pug">
.avatar
  .avatar-pin(v-if="avatarPinStyle")
    pin(
      :pin-style='avatarPinStyle'
      :pin-size="avatarPinSize"
      )
  .avatar-photo(:class="_avatarPhotoModel")
    image-backdrop(:img-url="avatarPhotoUrl")
</template>
<script>

import ImageBackdrop from '../ImageBackdrop/ImageBackdrop.vue'
import Pin from '../Pin/Pin.vue'

export default {
  name: 'Avatar',
  components: {
    ImageBackdrop,
    Pin
  },
  props: {
    avatarPinStyle: {
      type: [String, Number],
      default: () => ''
    },
    avatarPhotoUrl: {
      type: String,
      default: () => ''
    },
    avatarPhotoModel: {
      type: String,
      default: () => ''
    },
    avatarPinSize: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    _avatarPhotoModel: function () {
      return `avatar-photo--${this.avatarPhotoModel}`
    }
  }
}
</script>
<style lang="sass">
.avatar
  position: relative
  display: inline-flex
  &-photo
    display: inline-block
    border-radius: 100px
    overflow: hidden
    &--small
      width: 30px
      height: 30px
    &--large
      width: 60px
      height: 60px
  &-pin
    position: absolute
    display: inline-flex
    z-index: 2
    right: -3px
    top: 0px
</style>
