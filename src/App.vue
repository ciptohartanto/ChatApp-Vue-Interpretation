<template lang='pug'>
#app
  .wrapper
    friends-update
    friends-online
    Recent-convo

</template>

<script>
import FriendsUpdate from './Modules/FriendsUpdate/FriendsUpdate.vue'
import FriendsOnline from './Modules/FriendsOnline/FriendsOnline.vue'
import RecentConvo from './Modules/RecentConvo/RecentConvo.vue'

export default {
  name: 'app',
  components: {
    FriendsUpdate,
    FriendsOnline,
    RecentConvo
  }
}
</script>

<style lang="sass">
@import './assets/sass/globals/_reset'
@import './assets/sass/globals/_globals'

#app
  display: block
  position: relative

.wrapper
  display: block
  width: 100%
  padding: 20px 18px

</style>
