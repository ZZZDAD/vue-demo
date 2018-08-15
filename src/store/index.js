import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import VuexPersistence from 'vuex-persist'
import mutations from './mutations'

Vue.use(Vuex)

const state = {

}

const getters = {

}

const actions = {

}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({

  })
})

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin, logger()]
})
