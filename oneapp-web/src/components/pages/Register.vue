<template>
    <us-container id="RegisterPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8" v-if="formData">

            <h1 v-t>Sign Up</h1>

            <h2 v-t>Create an account for NJOneApp</h2>

            <us-form @submit="handleSubmit(doSubmit)" size="lg" class="mt-5 pb-3" :validate="true">

                <us-form-group label="Username" help-text='Your username must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.'>
                    <us-form-input
                        type='text'
                        label='Username'
                        :rules="{required:true, 'is-complex': true, 'username-available':true}"
                        name='username'
                        v-model="formData.username"
                    />
                </us-form-group>

                <us-form-group label="Email Address">
                    <us-form-input
                        type="email"
                        name="email"
                        :rules="{required:true, email: true}"
                        v-model="formData.email"
                    />                    
                </us-form-group>

                <us-form-group label="Password" help-text="Your password must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.">
                    <us-form-input
                        v-t
                        type="password"
                        name="password"
                        :rules="{required:true, 'is-complex': true}"
                        
                        v-model="formData.password"
                    />                    
                </us-form-group>

                <us-form-group label="Confirm your password">
                    <us-form-input
                        v-t
                        type="password"
                        name="password-confirm"
                        :rules="{required:true, 'password-confirm': true}"
                        v-model="formData.password2"
                    />                    
                </us-form-group>


                <us-form-group label="Hint question">
                    <us-form-combobox
                        v-t
                        :options="questions"
                        name="password"
                        :rules="{required:true}"
                        v-model="formData.hintQuestion"
                    />                    
                </us-form-group>

                <us-form-group label="Hint answer">
                    <us-form-input
                        v-t
                        type="text"
                        name="hint-answer"
                        :rules="{required:true}"
                        v-model="formData.hintAnswer"
                    />                    
                </us-form-group>

                <div class="mt-4" align="left">
                    <us-button type="submit" variant="primary" class="mr-2" v-t :isLoading="isLoading">Create Account</us-button>
                </div>

                <us-alert variant="error" class="mt-3" v-if="error" v-t>{{ error }}</us-alert>

                <us-alert variant="success" class="mt-3" v-if="success" v-t>
                    Account created, please <router-link :to="{ name: 'login' }">login</router-link> to continue.
                </us-alert>
            </us-form>

            <hr class="mb-4 mt-2" />

            <div class="mb-1 mt-1">
                <us-button variant="link" :to="{ name: 'home' }" v-t>Cancel</us-button>
            </div>
            <div class="mb-1 mt-1">
                <us-button variant="link" href="https://nj.gov/nj/privacy.html" v-t>Security and Privacy Act Statement</us-button>
            </div>

        </div>
    </us-container>
</template>

<script>
import User from '@/models/User.js';
import {Validator} from 'uswds-vue';
//import { Validator } from '../../../../../uswds-vue/src/main.js';
import Vue from 'vue';

const isComplex = function (str) {
    
    if (!str) {
        str = '';
    }

    const hasLetters = /[a-zA-Z]/.test(str);
    const hasNumbers = /\d/.test(str);
    const hasLength = str.length >= 8 && str.length <= 15;
    const hasNonalphas = /\W/.test(str);

    //const test = `hasLetters = ${hasLetters}, hasNumbers = ${hasNumbers}, hasLength = ${hasLength}, hasNonalphas = ${hasNonalphas}`;

    //console.log(test)

    if (hasLetters && !hasNonalphas && hasNumbers && hasLength) {
        return true;
    }

    return false;
};

export default {
    name: 'register',
    data() {
        return {
            questions: [
                { value: 1, label: "What is your mother's maiden name?" },
                { value: 2, label: 'In which city you were born?' },
                { value: 3, label: 'What is your favourite color?' }
            ],
            formData: {},
            error: null,
            success: false,
            isLoading: false
        };
    },
    async mounted() {

        var lastCheck = null;
        var lastResult = null;

        // Validation that checks if a username is available or not
        Validator.extend('username-available', {
            validator: async (username) => {

                if (!lastCheck){
                    lastCheck = Date.now();
                    lastResult = null;
                }

                let now = Date.now();
                let delta = now - lastCheck;

                if (delta > 1000){

                    //console.log(`Last checked ${delta}ms ago. Checking username = ${username}`);
                    const res = await User.checkUsername(username);
                    lastCheck = now;

                    if (res && res.users && res.users.userAvailable) {
                        return true;
                    } 
                    else {
                        return false;
                    }

                }

               return lastResult;

            }, 
            message: () => {
                return {
                    'en': Vue.t('This username is already taken, please try another')
                }
            }            
        });

        Validator.extend('is-complex', {
            validator: (str) => {
                return isComplex(str);
            },
            message: () => {
                return {
                    'en': Vue.t('Must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed')
                }
            }
        });
      
        Validator.extend('password-confirm', {
            validator: (val) => {
                return (val === this.formData.password );
            },
            message: () => {
                return {
                    'en': Vue.t('The confirmation password must match')
                }
            }
        });

        this.$log(Object.keys(Validator.ruleLibary))

        // matches
        await this.$store.dispatch('register');
    },
    methods: {
        // ///////////////////////////////////////////////////////////////////////////////////////

        async doSubmit() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('register', this.formData);
                this.error = null;
                this.success = true;
            } catch (err) {
                this.error = err;
            }
            this.isLoading = false;
        }
    }
};
</script>

<style lang="scss">
#RegisterPage {
}
</style>
