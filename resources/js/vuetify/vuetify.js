/**
 * This file is used to register vuetifyjs
 * 
 * Vuetify is a component based material framework
 */


import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)