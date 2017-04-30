import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        goodsDetail: null
    },
    mutations: {
         goodsDetail (state, payload) {
             state.goodsDetail = payload;
         },
    }
});