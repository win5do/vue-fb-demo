import Vue from 'vue';
import Router from 'vue-router';
import Form from '../components/form.vue';
import List from '../components/list.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        },
    ]
});