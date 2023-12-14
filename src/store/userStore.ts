export default {
  state() {
    return {
      currentUser: {
        name: 'ws',
        id: 1111
      },
      count: 1
    }
  },
  mutations: {
    addCount(state) {
      state.count++
    }
  },
  actions: {},
  getters: {}

}