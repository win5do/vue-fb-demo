import Vue from "vue";
import Router from "vue-router";
import Admin from "../components/admin.vue";
import Login from "../components/common/login.vue";
import GoodsForm from "../components/goods/goods-form.vue";
import GoodsList from "../components/goods/goods-list.vue";
import UserForm from "../components/user/user-form.vue";
import UserList from "../components/user/user-list.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/admin',
            redirect: '/admin/goods-list',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: '/admin/goods-list',
                    component: GoodsList,
                },
                {
                    path: '/admin/goods-form',
                    component: GoodsForm,
                },
                {
                    path: '/admin/user-list',
                    component: UserList,
                },
                {
                    path: '/admin/user-form',
                    component: UserForm,
                },
            ]
        },
        {
            path: '/',
            component: Login,
        },
    ]
});