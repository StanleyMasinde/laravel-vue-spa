import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {})

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#00796B',
                secondary: '#795700'
            },
            dark: {
                primary: '#00796B',
                secondary: '#795700'
            }
        }
    }
}

export default new Vuetify(opts)