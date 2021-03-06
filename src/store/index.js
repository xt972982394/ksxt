import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        test
    },
    getters
})