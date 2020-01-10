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
        photoUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
        name: 'Rita Chloe',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Kiambang Sumatra',
        status: 4
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/24.jpg',
        name: 'Kiambang Sumatra',
        status: 4
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
        name: 'Miranda Jones',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
        name: 'Rita Chloe',
        status: 3
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/women/56.jpg',
        name: 'Kiambang Sumatra',
        status: 4
      }
    ],
    recentConvo: [
      {
        photoUrl: 'https://randomuser.me/api/portraits/men/47.jpg',
        name: 'John Doe',
        status: 3,
        readStat: {
          status: 1,
          unread: 3
        },
        message: 'hey! I hope your day is fantastic!'
      },
      {
        photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'Kelmé Lee',
        status: 3,
        readStat: {
          status: 0,
          unread: 0
        },
        message: 'hey! I hope your day is fantastic!'
      }
    ]
  }

})
