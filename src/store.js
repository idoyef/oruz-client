import Vue from 'vue';
import Vuex from 'vuex';
import fakeData from './fakeData.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'test from store',
    currentNecklace: fakeData.necklace.silverNecklace
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    test: state => state.test,
    currentNecklace: state => state.currentNecklace
  }
})
