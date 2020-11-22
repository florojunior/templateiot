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
    }
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
