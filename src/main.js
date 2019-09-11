import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import router from './router';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue.js';
import Toasted from 'vue-toasted';
 
Vue.use(Toasted,{
  duration: 4000
})
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')