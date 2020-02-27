require('./bootstrap');

/**
 * =================================================================
 * 
 * =================================================================
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import vuetify from './vuetify/vuetify';
import store from './store';


/**
 * =================================================================
 *  Initialise a new Vue Application
 * =================================================================
 */
new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
