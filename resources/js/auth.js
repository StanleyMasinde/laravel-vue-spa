// plugin.js

// This exports the plugin object.
export default {
    // The install method will be called with the Vue constructor as
    // the first argument, along with possible options
    install(Vue, options) {
        // login a user using provided credential
        Vue.prototype.login = (username, password) => `${username} ${password}`
        // Register a user using details
        Vue.prototype.register = ({ name, email, password }) => `${email} ${name} ${password}`
        //Logout a user
        Vue.prototype.logout = () => 'Logged out'

        // Add `Vue.mixin()` to inject options to all components.
        Vue.mixin({
            // Add component lifecycle hooks or properties.
            created() {
                //
                 //console.log(this.$store.state.auth)
            },
            mounted() {
                //
            }
        })
    }
}