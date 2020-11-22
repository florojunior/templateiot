import Vue from 'vue';
import Vuex from 'vuex';

import { main } from './main/main';
//import { administration } from './administration/administration';
//import { authentication } from './authentication/authentication';
import { notification } from './notification/notification';
import { model } from './model/model';
import { modal } from './modal/modal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
    //administration,
    //authentication,
    notification,
    modal,
    model
  },
});
