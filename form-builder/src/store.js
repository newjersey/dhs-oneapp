import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/assets/form.config.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        formConfig: config
    },
    mutations: {
        setFormConfig(state, config) {
            state.formConfig = config;
        }  
    },
    getters: {
        getFormConfig(){
            return state.formConfig;
        }
    },
    actions: {},
    modules: {}
});
