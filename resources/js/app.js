/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');
import router from './router/router'
import Vue from "vue";
import App from './App.vue';
import "@babel/polyfill";


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");