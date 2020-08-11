import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import Logger from './utils/Logger';
import Notifications from './utils/Notifcations';
import { BootstrapVue } from 'bootstrap-vue';

// Install VeeValidate rules and localization
// https://logaretm.github.io/vee-validate/
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

localize('en', en);

// Install VeeValidate components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


Vue.use(Logger, { level: 'debug' });
Vue.use(Notifications, {});
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
