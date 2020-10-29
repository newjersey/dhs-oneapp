<template>
    <us-container id="LoginPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">

                <h1 v-t>
                    Sign In
                    <us-button variant="link" :to="{ name: 'register' }" v-t>or create a new account</us-button>
                </h1>

                <h2 v-t>Log into your NJOneApp account</h2>

                <us-form @submit="handleSubmit(doSubmit)" size="lg" class="mt-5 pb-3">

                    <us-form-group label="Username">
                        <us-form-input
                            type='text'
                            label='Username'
                            :rules="{required:true}"
                            name='username'
                            v-model="formData.username"
                        />
                    </us-form-group>

                    <us-form-group label="Password">
                        <us-form-input
                            v-t
                            type="password"
                            name="password"
                            :rules="{required:true}"                            
                            v-model="formData.password"
                        />                    
                    </us-form-group>

                    <div class="mt-2" align="left">
                        <us-button type="submit" variant="primary" class="mr-2" :isLoading="isLoading" v-t>Sign In</us-button>
                    </div>

                    <us-alert variant="error" v-t class="mt-3" v-if="error">Username or password is incorrect</us-alert>
                </us-form>

            <hr class="mb-4 mt-2" />

            <div class="mb-1 mt-1">
                <us-button variant="link" :to="{ name: 'forgot-username' }" v-t>Forgot your username?</us-button>
            </div>
            <div class="mb-1 mt-1">
                <us-button variant="link" :to="{ name: 'forgot-password' }" v-t>Forgot your password?</us-button>
            </div>
            <div class="mb-1 mt-1">
                <us-button variant="link" href="https://nj.gov/nj/privacy.html" v-t>Security and Privacy Act Statement</us-button>
            </div>
        </div>
    </us-container>
</template>

<script>

export default {
    name: 'login',
    components: {
    },
    data() {
        return {
            formData: {},
            error: null,
            isLoading: false
        };
    },
    mounted() {},
    methods: {
        async doSubmit() {
            this.isLoading = true;
            let token = await this.$store.dispatch('login', this.formData);
            this.isLoading = false;
            if (!token) {
                this.error = true;
            } else {
                this.$router.replace({ name: 'one-app' });
            }
        }
    }
};
</script>

<style lang="scss">
#LoginPage {
}
</style>
