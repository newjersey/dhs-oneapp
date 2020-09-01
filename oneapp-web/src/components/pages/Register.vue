<template>
    <us-container id="RegisterPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">
            <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }">

                <us-alert variant="danger" v-if="error">{{error}}</us-alert>

                <h1 v-t>Sign Up</h1>

                <h2 v-t>Create an account for NJOneApp</h2>

                <us-form @submit="handleSubmit(doSubmit)" size="lg" class="mt-5 pb-3">

                    <form-input :config="{ 
                        type: 'text', 
                        label: 'Username', 
                        validationMode: 'lazy', // validate on blur, default validates on input and blur
                        rules: 'required|username-available',
                        name: 'username', 
                        help: 'Your username must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.', 
                        required: true }" 
                        v-model="formData.username" 
                    />

                    <form-input :config="{ 
                        type: 'email', 
                        label: 'Email Address', 
                        name: 'email',
                        required: true }" 
                        v-model="formData.email" 
                    />

                    <form-input :config="{ 
                        type: 'password', 
                        label: 'Password', 
                        name: 'password', 
                        help: 'Your password must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.', 
                        required: true }" 
                        v-model="formData.password" 
                    />

                    <form-input :config="{ 
                        type: 'password-confirm', 
                        label: 'Confirm your password',
                        name: 'password confirmation', 
                        required: true }" 
                        v-model="formData.password2" />



                    <form-input class="mt-5 mb-5" :config="{ 
                        type: 'combo-box', 
                        label: 'Hint question', 
                        name: 'hint question',
                        options: questions,
                        required: true }" 
                        v-model="formData.hintQuestion" />

                    <form-input :config="{ 
                        type: 'text', 
                        label: 'Hint answer', 
                        required: true }" 
                        v-model="formData.hintAnswer" />
                        
                    <div class="mt-4" align="left">
                        <us-button type="submit" variant="primary" class="mr-2" v-t>Create Account</us-button>
                    </div>
                    
                </us-form>
            </validation-observer>
            
        </div>

        <pre>{{formData}}</pre>

    </us-container>
</template>

<script>

import FormInput from '@/components/partials/forms/FormInput.vue';
import User from '@/services/User.js';

export default {
    name: 'login',
    components: { 
        FormInput 
    },
    data() {
        return {
            questions: [
                {value: 1, label: "What is your mother's maiden name?"},
                {value: 2, label: "In which city you were born?"},
                {value: 3, label: "What is your favourite color?"},
            ],
            formData: {
                username: '',
                email: '',
                password: '',
                password2: '',
                hintQuestion: 2
            },
            error: null
        };
    },
    async mounted(){
        await this.$store.dispatch('register');
    },
    methods: {

        // ///////////////////////////////////////////////////////////////////////////////////////

        async doSubmit() {
            
            // First, check if username is available
            const user = new User();
            const res = await user.checkUsername(this.formData.username);

            this.$log(res);
            //await this.$store.dispatch('register', this.formData);
        }
    }
};
</script>

<style lang="scss">
#RegisterPage {
}
</style>
