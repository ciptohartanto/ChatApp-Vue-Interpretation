<template lang="pug">
  .friendsUpdates
    .friendsUpdates-head
      segment-text(
        :segment-type-mode = 'friendsUpdatesTypeMode'
        segment-main-textcopy="What's New"
        segment-secondary-textcopy="Show all"
        )
    .friendsUpdates-list
      horizontal-scroll(
          :parent-height='friendsUpdateListParentHeight'
          :child-height='friendsUpdateListChildHeight'
          )
        .friendsUpdates-item(
          v-for="item in friendUpdates"
          :key="item.photoUrl"
          )
          kard(
            :kard-photo-url="item.photoUrl"
            :kard-textcopy="item.name"
            :kard-pin='item.status'
            )

</template>
<script>
import Kard from '../../Components/Kards/Kard.vue'
import segmentText from '../../Components/SegmentText/SegmentText.vue'
import HorizontalScroll from '../../Components/Effects/HorizontalScroll.vue'

export default {
  name: 'FriendsUpdate',
  components: {
    Kard,
    segmentText,
    HorizontalScroll
  },
  props: {
    friendsUpdateListParentHeight: {
      type: Number,
      default: 150
    },
    friendsUpdateListChildHeight: {
      type: Number,
      default: 156
    },
    friendsUpdatesTypeMode: {
      type: Number,
      default: 1
    }
  },
  computed: {
    friendUpdates () {
      return this.$store.state.friendsUpdates
    }
  }
}
</script>
<style lang="sass">
.friendsUpdates
  display: flex
  flex-wrap: wrap
  flex-direction: column
  &-list
    display: flex
    width: 100%

  &-item
    margin-right: 10px

  &-head
    margin-bottom: 20px

</style>
