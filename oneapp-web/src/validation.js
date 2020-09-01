import Vue from 'vue';
import User from '@/services/User.js';

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


// Custom password complexity rule
extend('password-complex', password => {

    if (!password){
        password = '';
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasLength = (password.length >= 8 && password.length <= 15);
    const hasNonalphas = /\W/.test(password);

    //const test = `hasLetters = ${hasLetters}, hasNumbers = ${hasNumbers}, hasLength = ${hasLength}, hasNonalphas = ${hasNonalphas}`;

    //console.log(test)

    if (hasLetters && !hasNonalphas && hasNumbers && hasLength) {
        return true;
    }
    else {
        return 'Password must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.';
    }
});

// Validation that checks if a username is available or not
extend('username-available', async (username) => {

    const failMsg = Vue.t('This username is already taken, please try another');

    if (!username){
        return Vue.t('You must enter a username');
    }

    const user = new User();
    const res = await user.checkUsername(username);

    if (res && res.users && res.users.userAvailable) {
        return true;
    }
    else {
        return failMsg;
    }
});