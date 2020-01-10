<template lang="pug">
  .recentConvo
    .recentConvo-head
      SegmentText(
        :segment-type-mode="recentConvoSegmentMode"
        segment-two-textcopy="Recent Conversations"
      )
    .recentConvo-list
      .recentConvo-item(
         v-for="item in recentConvo"
        )
        .recentConvo-photo
          avatar(
            :avatar-pin-style="item.status"
            :avatar-photo-model="recentConvoPhotoModel"
            :avatar-photo-url="item.photoUrl"
            :avatar-pin-size="recentConvoAvatarPinSize"
            )

        .recentConvo-text
          .recentConvo-username
            fondre(
              fondre-tag="h3"
              :fondre-style="recentConvoFondreMode"
              :fondre-textcopy="item.name"
            )
          .recentConvo-message
            fondre(
              fondre-tag="h4"
              :fondre-style="recentConvoFondreMode"
              :fondre-textcopy="item.message"
            )

        .recentConvo-secondary
          .recentConvo-time
            fondre(
              fondre-tag="h5"
              :fondre-style="recentConvoFondreTime"
              fondre-textcopy="04:30PM"
            )
          .recentConvo-pin
            pin(
              :pin-style="item.readStat.status"
              :pin-textcopy="item.readStat.unread"
              )

</template>

<script>
import SegmentText from '../../Components/SegmentText/SegmentText.vue'
import Fondre from '../../Components/Fondre/Fondre.vue'
import Pin from '../../Components/Pin/Pin'
import { PIN_SIZES } from '../../Components/Pin/Const-pin'
import { FONDRE_STYLES } from '../../Components/Fondre/Const-fondre.js'
import Avatar from '../../Components/Avatars/Avatars.vue'
import { AVATAR_STYLES } from '../../Components/Avatars/Const-avatar.js'

export default {
  name: 'RecentConvo',
  components: {
    SegmentText,
    Fondre,
    Avatar,
    Pin
  },
  props: {
    recentConvoSegmentMode: {
      type: Number,
      default: 2
    },
    recentConvoPhotoModel: {
      type: String,
      default: AVATAR_STYLES.L[0]
    },
    recentConvoFondreMode: {
      type: String,
      default: FONDRE_STYLES.F_M
    },
    recentConvoFondreTime: {
      type: String,
      default: FONDRE_STYLES.F_XS
    },
    recentConvoAvatarPinSize: {
      type: String,
      default: PIN_SIZES.L
    }
  },
  computed: {
    recentConvo () {
      return this.$store.state.recentConvo
    }
  }
}
</script>
<style lang="sass" scoped>
.recentConvo
  &-item
    display: flex
    padding-bottom: 5px
    margin-bottom: 5px
    padding-top: 5px
    position: relative
    &:after
      content: ''
      position: absolute
      bottom: 0
      right: 0
      height: 1px
      width: calc(100% - 70px)
      background-color: rgba(grey, .5)
  &-head
    margin-top: 30px
    margin-bottom: 15px
  &-photo
    margin-right: 10px
  &-username
    font-weight: bold
    color: blue
  &-pin
    display: flex
    justify-content: flex-end
    margin-top: 5px
</style>
