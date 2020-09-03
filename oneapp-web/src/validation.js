import Vue from 'vue';
import User from '@/services/User.js';
import {throttle} from 'lodash';
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

const isComplex = function(str){

    if (!str){
        str = '';
    }

    const hasLetters = /[a-zA-Z]/.test(str);
    const hasNumbers = /\d/.test(str);
    const hasLength = (str.length >= 8 && str.length <= 15);
    const hasNonalphas = /\W/.test(str);

    //const test = `hasLetters = ${hasLetters}, hasNumbers = ${hasNumbers}, hasLength = ${hasLength}, hasNonalphas = ${hasNonalphas}`;

    //console.log(test)

    if (hasLetters && !hasNonalphas && hasNumbers && hasLength) {
        return true;
    }

    return false;
}

// Custom password complexity rule
extend('password-complex', password => {

    if (isComplex(password)) {
        return true;
    }
    else {
        return Vue.t('Password must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed');
    }
});

const throttledUsernameCheck = throttle(async function(username){

    if (!username){
        return Vue.t('You must enter a username');
    }

    if (!isComplex(username)) {
        return Vue.t('Username must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed');
    }

    const user = new User();
    const res = await user.checkUsername(username);

    if (res && res.users && res.users.userAvailable) {
        return true;
    }
    else {
        return Vue.t('This username is already taken, please try another');
    }

}, {leading: true})

// Validation that checks if a username is available or not
extend('username-available', throttledUsernameCheck);