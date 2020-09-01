import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';
//import moment from 'moment';
import User from '@/services/User.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {    
        user: null
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        }      
    },
    getters: {
        getUser(state){
            return state.user;
        }
    },
    actions: {


        // ///////////////////////////////////////////////////////////////////////////////////////
        
        async login({ state, commit, dispatch }, opts) {
            let user = new User();
            await user.login(opts);
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        /**
         * Get any basic data that we'll need 
         */
        async register({ state, commit, dispatch }) {

            let user = new User();

            console.log('Getting user info...')

            await user.load();

            // Get data meta info


            console.log('user = ', user);
            return user;

        }
    
    }
})
