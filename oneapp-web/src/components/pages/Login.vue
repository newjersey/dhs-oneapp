<template>
    <us-container id="LoginPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">
            <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }">

                <h1 v-t>
                    Sign In
                    <us-button variant="link" :to="{name:'register'}" v-t>or create a new account</us-button>
                </h1>

                <h2 v-t>Log into your NJOneApp account</h2>

                <us-form @submit="handleSubmit(doSubmit)" size="lg" class="mt-5 pb-3">

                    <form-input :config="{ 
                        type: 'text', 
                        label: 'Username', 
                        name: 'username', 
                        required: true }" 
                        v-model="formData.username" 
                    />

                    <form-input :config="{ 
                        type: 'password', 
                        label: 'Password', 
                        name: 'password', 
                        rules: 'required',
                        validationMessage: 'Password must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.',
                        required: true }" 
                        v-model="formData.password" 
                    />

                    <div class="mt-4" align="left">
                        <us-button type="submit" variant="primary" class="mr-2" v-t>Sign In</us-button>
                    </div>
                    
                </us-form>

            </validation-observer>

            <hr class="mb-4 mt-2"/>

            <div class="mb-1 mt-1">
                <us-button variant="link" :to="{name:'forgot-username'}" v-t>Forgot your username?</us-button>
            </div>
            <div class="mb-1 mt-1">
                <us-button variant="link" :to="{name:'forgot-password'}" v-t>Forgot your password?</us-button>
            </div>
            <div class="mb-1 mt-1">
                <us-button variant="link" href="https://nj.gov/nj/privacy.html" v-t>Security and Privacy Act Statement</us-button>
            </div>

        </div>
    </us-container>
</template>

<script>
import FormInput from '@/components/partials/forms/FormInput.vue';

export default {
    name: 'login',
    components: {
        FormInput
    },
    data() {
        return {
            formData: {}
        };
    },
    mounted() {},
    methods: {
        async doSubmit() {
            await this.$store.dispatch('login', this.formData);
        }
    }
};
</script>

<style lang="scss">
#LoginPage {
}
</style>
