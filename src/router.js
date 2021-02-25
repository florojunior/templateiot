import Vue from 'vue';
import Router from 'vue-router';

import { routerPath } from './model/configController' 

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: routerPath,
      name: 'view',
      component: () =>
        import(
          /* webpackChunkName: "login" */ '@/views/View.vue'
        ),
    },
    {
      path: `${routerPath}/list`,
      name: 'list',
      component: () =>
        import(
          /* webpackChunkName: "login" */ '@/views/application/List.vue'
        ),
    },
    {
      path: `${routerPath}/form`,
      name: 'view',
      component: () =>
        import(
          /* webpackChunkName: "login" */ '@/views/application/Form.vue'
        ),
    },
    {
      path: `${routerPath}/editform`,
      name: 'editForm',
      component: () =>
        import(
          /* webpackChunkName: "login" */ '@/views/application/FormEdit.vue'
        ),
    }
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
