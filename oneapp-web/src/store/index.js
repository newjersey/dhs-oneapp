import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
//import moment from 'moment';
import User from '@/services/User.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    },
    actions: {
        // ///////////////////////////////////////////////////////////////////////////////////////

        async login({ state, commit, dispatch }, opts) {
            let user = new User();
            let info = await user.login(opts);
            console.log(info);
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        /**
         * Get any basic data that we'll need
         */
        async register({ state, commit, dispatch }, opts) {
            let user = new User();

            console.log('Getting user info...');

            await user.register(opts);

            return user;
        }
    }
});
