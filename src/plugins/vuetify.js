import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VuetifyToast from 'vuetify-toast-snackbar';
import { TiptapVuetifyPlugin } from 'tiptap-vuetify';
import 'tiptap-vuetify/dist/main.css';

Vue.use(Vuetify);
Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  icon: 'info',
  iconColor: '', // default
  classes: ['body-2'],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: '', // default
  closeIcon: 'close', // default
  closeColor: '', // default
  slot: [], //default
  shorts: {
    custom: {
      color: 'purple',
    },
  },
  property: '$toast', // default);
});

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      options: {
        customProperties: true,
      },
      light: {
        primary: '#354A5F',
        secondary: '#FFFFFF',
        tertiary: '#434343',
        body: '#000000',
        cardcolor: '#FFFFFF',
        accent: '#002A9C',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#8bc34a',
        success: '#4caf50',
        background_default: '#f7f7f7',
        table_header:'#eeeeee',
        background: {
          base: '#FFFFFF',
          darken1: '#F2F4F8',
          darken2: '#eeeeee',
        },
      },
    },
  },
  components: {},
});

Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify: vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'md',
});

export default vuetify;
