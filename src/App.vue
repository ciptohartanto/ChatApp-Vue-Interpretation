<template lang='pug'>
#app
  .wrapper
    friends-update
    friends-online

</template>

<script>
import FriendsUpdate from './Modules/FriendsUpdate/FriendsUpdate.vue'
import FriendsOnline from './Modules/FriendsOnline/FriendsOnline.vue'

export default {
  name: 'app',
  components: {
    FriendsUpdate,
    FriendsOnline
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
