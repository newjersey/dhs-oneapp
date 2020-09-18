import UsAlert from './UsAlert';
import UsCard from './UsCard';
import UsForm from './form/UsForm';
import UsFormInput from './form/UsFormInput';
import UsFormGroup from './form/UsFormGroup';
import UsComboBox from './form/UsComboBox';
import UsButton from './UsButton';
import UsTag from './UsTag';
import UsPill from './UsPill';
import UsImg from './UsImg';
import UsHeader from './header/UsHeader';
import UsFooter from './UsFooter';
import UsNavItem from './header/UsNavItem';
import UsHeaderNav from './header/UsHeaderNav';
import UsHeaderBrand from './header/UsHeaderBrand';
import UsOfficialHeader from './header/UsOfficialHeader';
import UsContainer from './layout/UsContainer';
import UsRow from './layout/UsRow';
import UsCol from './layout/UsCol';

// Debug components
import UsResponsiveInfo from './debug/UsResponsiveInfo';

const Components = {
    UsPill,
    UsTag,
    UsRow,
    UsCol,
    UsAlert,
    UsCard,
    UsButton,
    UsForm,
    UsFormInput,
    UsFormGroup,
    UsComboBox,
    UsImg,
    UsHeader,
    UsNavItem,
    UsHeaderNav,
    UsContainer,
    UsOfficialHeader,
    UsHeaderBrand,
    UsFooter,
    UsResponsiveInfo
};

/**
 * Install function to enable global install;
 * import { UswdsVue } from 'uswds-vue';
 * Vue.use(UswdsVue);
 *
 * @param {*} Vue
 * @param {*} config
 */
const UswdsVue = {
    install(Vue, config = {}) {
        Object.keys(Components).forEach((name) => {
            Vue.component(name, Components[name]);
        });

        if (config.bootstrap) {
            // Layer in bootstrap utility styles...
        }
    }
};

export { UswdsVue };

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UswdsVue);
}

/**
 * Export components individually as an alternative
 */
//Object.keys(Components).forEach(name => {
//	export Components[name];
//});
