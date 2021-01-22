import Vuex from 'vuex';

export default Vuex.createStore({
  state: {
    absoluteId: 0
  },
  mutations: {
    addAbsoluteId(state) {
      state.absoluteId ++;
    }
  },
  modules: {

  }
});
