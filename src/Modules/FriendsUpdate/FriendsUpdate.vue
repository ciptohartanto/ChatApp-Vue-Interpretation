<template lang="pug">
  .friendsUpdates
    .friendsUpdates-item(v-for="item in friendUpdates" :key="item.photoUrl")
      kard(:kard-photo-url="item.photoUrl" :kard-textcopy="item.name" :kard-pin='item.status')

</template>
<script>
import Kard from '../../Components/Kards/Kard.vue'
export default {
  name: 'FriendsUpdate',
  components: {
    Kard
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

  &-item
    margin-right: 10px

</style>
