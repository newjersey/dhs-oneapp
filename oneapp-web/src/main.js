import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import Logger from './utils/Logger';
import Translate from './utils/Translate';
import './validation.js';
import Notifications from './utils/Notifcations';
//import VueI18n from 'vue-i18n';

import uswds from 'uswds/dist/js/uswds.min.js';
import { UswdsVue } from 'uswds-vue';

// Until stable, pulling from here
//import { UswdsVue } from '../../../uswds-vue/src/main.js';

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
    render: (h) => h(App)
}).$mount('#nj-oneapp-vue-container');
