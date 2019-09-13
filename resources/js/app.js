/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');
import router from './router/router'
import Vue from "vue";
import vuetify from './vuetify/vuetify'
import App from './App.vue';
import store from './vuex/store'
import "@babel/polyfill";

/**
 * Register any components that are not part of the views
 * 
 * @return {Vue}
 */
Vue.component('loader', require('./components/Loader.vue').default)

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");