import Vue from 'vue';
import Router from 'vue-router';

import { routerPath } from './model/configController'
import List from '@/views/application/List.vue';
import Form from '@/views/application/Form.vue';
import FormEdit from '@/views/application/FormEdit.vue';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: `${routerPath}`,
      name: 'list',
      component: List,
    },
    {
      path: `${routerPath}/form`,
      name: 'view',
      component: Form,
    },
    {
      path: `${routerPath}/editform`,
      name: 'editForm',
      component: FormEdit,
    }
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
