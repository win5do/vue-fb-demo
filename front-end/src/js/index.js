import "minireset.css";
import axios from "axios";
import ElementUI from "element-ui";
import Vue from "vue";
import "../../theme/index.css";
import Index from "../renders/index.vue";
import router from "../routes/router";
import store from "../state/vuex-store";
import "../assets/css/common.scss";
import func from "../public/func";
import api from "../public/api";

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

router.beforeEach((to, from, next) => {
    vm.func.ajaxGet(vm.api.userAutoLogin, res => {
        if (res.status === 201) {
            vm.$store.commit('user', res.data);
            vm.$router.push('/admin');

        } else {
            vm.$router.push('/');
        }
    });

    next();
});