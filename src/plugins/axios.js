import Vue from 'vue';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

//httpClient.defaults.headers.common['x-csrf-token'] = 'Fetch';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = httpClient;
  },
});

httpClient.interceptors.request.use(
  function (config) {

    /*if(localStorage.getItem('x_csrf_token_tracker') != 'undefined' && 
      localStorage.getItem('x_csrf_token_tracker') != undefined){
      config.headers['x-csrf-token'] = `${localStorage.getItem('x_csrf_token_tracker')}`;
    }
*/
    config.headers['Authorization'] = `${JSON.parse(localStorage.getItem('user')).basic}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (config) => {
    //console.log('axios');
    //this.$toast('Sucesso');
    //console.log(config.headers['x-csrf-token']);
    if (config.request.status === 200) {
      //localStorage.setItem('x_csrf_token_tracker', config.headers['x-csrf-token'])
      //alert('Sucesso');
    }
    return config;
  },
  (error) => {
    /*if (error.request.status === 401) {
      localStorage.setItem('token_blood', null);
      router.push({ name: 'login' }, {});
    }
    if (error.request.status === 500) {
      alert('Erro Geral');
    }

    if (error.request.status === 400) {
      localStorage.setItem('token_blood', null);
      router.push({ name: 'login' }, {});
    }*/
    return Promise.reject(error);
  }
);

Vue.use(require('vue-moment'));

export default httpClient;
