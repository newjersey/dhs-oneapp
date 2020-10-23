<template>
    <us-container id="RegisterPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8" v-if="formData">
            <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }">
                <h1 v-t>Sign Up</h1>

                <h2 v-t>Create an account for NJOneApp</h2>

                <us-form @submit="handleSubmit(doSubmit)" size="lg" class="mt-5 pb-3">
                    <form-input
                        :config="{
                            type: 'text',
                            label: 'Username',
                            rules: 'required|username-available',
                            name: 'username',
                            help: 'Your username must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.',
                            required: true
                        }"
                        v-model="formData.username"
                    />

                    <form-input
                        :config="{
                            type: 'email',
                            label: 'Email Address',
                            name: 'email',
                            required: true
                        }"
                        v-model="formData.email"
                    />

                    <form-input
                        :config="{
                            type: 'password',
                            label: 'Password',
                            name: 'password',
                            help: 'Your password must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.',
                            required: true
                        }"
                        v-model="formData.password"
                    />

                    <form-input
                        :config="{
                            type: 'password-confirm',
                            label: 'Confirm your password',
                            name: 'password confirmation',
                            required: true
                        }"
                        v-model="formData.password2"
                    />

                    <form-input
                        class="mt-5 mb-5"
                        :config="{
                            type: 'combo-box',
                            label: 'Hint question',
                            name: 'hint question',
                            options: questions,
                            required: true
                        }"
                        v-model="formData.hintQuestion"
                    />

                    <form-input
                        :config="{
                            type: 'text',
                            label: 'Hint answer',
                            required: true
                        }"
                        v-model="formData.hintAnswer"
                    />

                    <div class="mt-4" align="left">
                        <us-button type="submit" variant="primary" class="mr-2" v-t :isLoading="isLoading">Create Account</us-button>
                    </div>

                    <us-alert variant="error" class="mt-3" v-if="error" v-t>{{ error }}</us-alert>

                    <us-alert variant="success" class="mt-3" v-if="success" v-t>
                        Account created, please <router-link :to="{ name: 'login' }">login</router-link> to continue.
                    </us-alert>
                </us-form>
            </validation-observer>

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
import FormInput from '@/components/partials/forms/FormInput.vue';
import User from '@/models/User.js';

export default {
    name: 'login',
    components: {
        FormInput
    },
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
