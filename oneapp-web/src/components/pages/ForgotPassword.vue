<template>
    <us-container id="ForgotPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">
            <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }">

                <h1 v-t>
                    Forgot your password?
                </h1>

                <h2 v-t>We’ll send it to you after you confirm your email address.</h2>

                <p><b>Note:</b> If you didn’t provide an email address when you created your account, you’ll have to start a new application.</p>

                <us-form @submit="handleSubmit(doSubmit)" size="lg" class="mt-5 pb-3">

                    <form-input :config="{ 
                        type: 'email', 
                        label: 'Email address', 
                        name: 'email', 
                        required: true }" 
                        v-model="email" 
                    />

                    <div class="mt-2" align="left">
                        <us-button type="submit" variant="primary" class="mr-2" :isLoading="isLoading" v-t>Submit</us-button>
                    </div>

                    <us-alert variant="error" v-t class="mt-3" v-if="error">{{error}}</us-alert>

                </us-form>

            </validation-observer>

            <hr class="mb-4 mt-2"/>

            <div class="mb-1 mt-1">
                <us-button variant="link" :to="{name:'home'}" v-t>Cancel</us-button>
            </div>
            <div class="mb-1 mt-1">
                <us-button variant="link" href="https://nj.gov/nj/privacy.html" v-t>Security and Privacy Act Statement</us-button>
            </div>

        </div>
    </us-container>
</template>

<script>
import FormInput from '@/components/partials/forms/FormInput.vue';
import User from '@/services/User.js';

export default {
    name: 'forgot-password',
    components: {
        FormInput
    },
    data() {
        return {
            email: null,
            error: null,
            isLoading: false
        };
    },
    mounted() {},
    methods: {
        async doSubmit() {
            this.isLoading = true;
            
            try {
                await User.requestPasswordReset(this.email);
            }
            catch(err){
                this.error = err;
            }

            this.isLoading = false;
        }
    }
};
</script>
