import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import Logger from './utils/Logger';
import Translate from './utils/Translate';
import Notifications from './utils/Notifcations';
//import { UswdsVue } from 'uswds-vue';
// Until stable, pulling from here
import { UswdsVue } from '../../../uswds-vue/src/main.js';
//import VueI18n from 'vue-i18n';

// https://logaretm.github.io/vee-validate/
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';

// Install VeeValidate rules and localization
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

localize('en', en);
// TODO: add spanish validation messages here!!!!

// Install VeeValidate components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

/*
const messages= {
    en: {
        home: {
            title: 'Apply for New Jersery social services'
        }
    }
}

Vue.use(VueI18n, {locale: 'en', messages: messages});
*/

Vue.use(Translate, { locale: 'en' });
Vue.use(Logger, { level: 'debug' });
Vue.use(Notifications, {});
Vue.use(UswdsVue);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
