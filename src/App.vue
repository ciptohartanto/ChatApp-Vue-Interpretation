<template lang='pug'>
#app
  .wrapper
    friends-update
</template>

<script>
import FriendsUpdate from './Modules/FriendsUpdate/FriendsUpdate.vue'

export default {
  name: 'app',
  components: {
    FriendsUpdate
  }
}
</script>

<style lang="sass">
@import './assets/sass/globals/_reset'
@import './assets/sass/globals/_globals'

.wrapper
  padding: 20px 18px

</style>
