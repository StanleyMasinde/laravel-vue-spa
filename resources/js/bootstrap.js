window._ = require('lodash');

/**
 * We'll Register our service worker which is located in the public/sw.js
 * The service worker is currently empty to allow you to user your own login that
 * you think works best with your application
 */
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(_registered => {
        //the service worker has been registered
        console.log(`😁😁 The service worker was successfully registered for ${_registered.scope}`)
    }).catch((_err) => {
        //The registration failed
        console.error(`😓😓😓Oops The service worker registration has failed ${_err}`)
    })
}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// auth status as a variable
window.auth = document.head.querySelector('meta[name="auth"]').content

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
