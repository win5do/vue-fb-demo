import "minireset.css";
import axios from "axios";
import ElementUI from "element-ui";
import Vue from "vue";
import Index from "../renders/index.vue";
import router from "../routes/router";
import store from "../state/vuex-store";
import "../assets/css/admin.scss";
import func from "../public/func";
import api from "../../../back-end/api";

Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.prototype.api = api;
Vue.prototype.func = func;

let vm = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Index),
});

//router.beforeEach((to, from, next) => {
//    vm.func.ajaxGet(vm.api.userAutoLogin, res => {
//        if (res.data.code === 200) {
//            vm.$store.commit('user', res.data.user);
//
//        } else {
//            vm.$router.push('/');
//        }
//    });
//
//    next();
//});