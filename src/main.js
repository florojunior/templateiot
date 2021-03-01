import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';
import i18n from './i18n'
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import './plugins/axios';
import './plugins/mask';
import './plugins/excel';
import './plugins/barcode-reader';


Vue.config.productionTip = false;


const containerSelector = '#appDetail-placeholder'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    el: containerSelector,
    router,
    store,
    i18n,
    vuetify
  }
});


// const vueLifecycles = singleSpaVue({
//   Vue,
//   appOptions: {
//     render(h) {
//       return h(App, {
//         props: {
//           // single-spa props are available on the "this" object. Forward them to your component as needed.
//           // https://single-spa.js.org/docs/building-applications#lifecyle-props
//           name: this.name,
//           mountParcel: this.mountParcel,
//           singleSpa: this.singleSpa,
//         },
//       });
//     },
//   },
// });

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;