// 手写迷你版Vuex
// import { createStore } from "./miniStore";
// const store = createStore({
//   state: {
//     count:666
//   },
//   mutations:{
//     add(state){
//       debugger
//       state.count++
//     }
//   },
// })
// 手写迷你版Vuex


import { createStore } from "vuex";
import userStore from './userStore'
import objStore from "./objStore";
const store = createStore({
  state: {
    count:666
  },
  mutations:{
  },
  modules: {
    userStore,
    objStore
  }
})
export default store