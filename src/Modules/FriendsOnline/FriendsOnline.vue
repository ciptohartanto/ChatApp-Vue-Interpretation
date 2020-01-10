<template lang="pug">
  .friendsOnline
    .friendsOnline-head
      segment-text(
        :segment-type-mode = 'friendsOnlineTypeMode'
        :segment-two-textcopy = '_friendsOnlineTextcopy'
        :segment-two-number-textcopy = '_friendsOnlineNumber'
      )
    .friendsOnline-list
      horizontal-scroll(
        :parent-height='friendsOnlineParentHeight'
        :child-height='friendsOnlineChildHeight'
        )
        .friendsOnline-item(
          v-for=" item in friendsOnline"
          :key="item.photoUrl"
          )
          avatar(
            :avatar-pin-style="item.status"
            :avatar-photo-model="friendsOnlinePhotoModel"
            :avatar-photo-url="item.photoUrl"
            )
</template>
<script>
import SegmentText from '../../Components/SegmentText/SegmentText.vue'
import HorizontalScroll from '../../Components/Effects/HorizontalScroll.vue'
import Avatar from '../../Components/Avatars/Avatars.vue'
import { AVATAR_STYLES } from '../../Components/Avatars/Const-avatar.js'
export default {
  name: 'FriendsOnline',
  components: {
    SegmentText,
    Avatar,
    HorizontalScroll
  },
  props: {
    friendsOnlineTypeMode: {
      type: Number,
      default: 2
    },
    friendsOnlinePhotoModel: {
      type: String,
      default: AVATAR_STYLES.S[0]
    },
    friendsOnlineParentHeight: {
      type: Number,
      default: AVATAR_STYLES.S[1]
    },
    friendsOnlineChildHeight: {
      type: Number,
      default: AVATAR_STYLES.S[1] + 6
    }
  },
  computed: {
    friendsOnline () {
      return this.$store.state.friendsOnline
    },
    _friendsOnlineNumber: function () {
      return this.$store.state.friendsOnline.length
    },
    _friendsOnlineTextcopy: function () {
      const friendsOnline = this.$store.state.friendsOnline.length
      const addS = friendsOnline !== 1 ? 's' : ''
      return ` Friend${addS} online`
    }
  }
}
</script>
<style lang="sass" scoped>
.friendsOnline
  &-head
    margin-bottom: 10px
    margin-top: 20px
  &-item
    margin-right: 10px
</style>
