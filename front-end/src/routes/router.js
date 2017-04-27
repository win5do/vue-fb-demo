import Vue from 'vue';
import Router from 'vue-router';
import Admin from '../components/admin.vue';
import Form from '../components/childs/form.vue';
import List from '../components/childs/list.vue';
import Login from '../components/childs/login.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/admin',
            redirect: '/admin/list',
            name: 'list',
            component: Admin,
            children: [
                {
                    path: '/admin/list',
                    name: 'list',
                    component: List,
                },
                {
                    path: '/admin/form',
                    name: 'form',
                    component: Form,
                },]
        },
        {
            path: '/',
            name: 'login',
            component: Login,
        },
    ]
});