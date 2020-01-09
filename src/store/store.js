import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    friendsUpdates: [
      {
        photoUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
        name: 'John Doe',
        status: 0
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
        name: 'Miranda Jones',
        status: 1
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/84.jpg',
        name: 'Rita Chloe',
        status: 0
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
        name: 'Kiambang Sumatra',
        status: 1
      }
    ]
  }

})
