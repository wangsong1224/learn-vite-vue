export default {
  state: {
    currentUser: {
      name: 'ws',
      id: 1111
    },
    countObj: 1
  },
  mutations: {
    addCountObj(state) {
      state.countObj++
    }
  },
  actions: {},
  getters: {}

}