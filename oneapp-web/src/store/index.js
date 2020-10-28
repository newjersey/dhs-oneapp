import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
//import moment from 'moment';
import User from '@/models/User.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        formData: {}
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setFormData(state, data) {
            state.formData = data;
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getFormData(state) {
            return state.formData;
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
