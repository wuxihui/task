import Vue from 'vue'
import Vuex from 'vuex'
import http from './untils/http'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //moveList: []
  },
  mutations: {
    //GETLIST(state, list) { state.moveList = list }
  },
  actions: {
    // getMoveList({ commit }) {
    //   http.get('/gateway', {
    //     params: {
    //       type: 2,
    //       cityId: 440300,
    //       k: 6151574
    //     },
    //     headers: {
    //       ' X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15598127485896990097668"}',
    //       'X-Host': 'mall.cfg.common-banner'
    //     }
    //   }).then(res => {
    //     console.log(res.data);
    //   })
    // }
  }
})
