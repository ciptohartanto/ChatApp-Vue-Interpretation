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
    ],
    friendsOnline: [
      {
        photoUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
        name: 'John Doe',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
        name: 'Miranda Jones',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/80.jpg',
        name: 'Rita Chloe',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/64.jpg',
        name: 'Kiambang Sumatra',
        status: 4
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/13.jpg',
        name: 'Miranda Jones',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
        name: 'Rita Chloe',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
        name: 'Kiambang Sumatra',
        status: 4
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/64.jpg',
        name: 'Kiambang Sumatra',
        status: 4
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/13.jpg',
        name: 'Miranda Jones',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
        name: 'Rita Chloe',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
        name: 'Kiambang Sumatra',
        status: 4
      }
    ]
  }

})
