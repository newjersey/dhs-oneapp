<template>
    <us-container id="LoginPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">
            <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }">
                <h2 v-t>Log in</h2>

                <us-form @submit="handleSubmit(doSubmit)" v-if="formData" size="lg" class="mt-5 pb-3">
                    <div class="mt-4" align="left">
                        <us-button type="submit" variant="primary" class="mr-2">Submit</us-button>
                    </div>
                </us-form>
            </validation-observer>
        </div>
    </us-container>
</template>

<script>
//import FormInput from '@/components/partials/forms/FormInput.vue';

export default {
    name: 'login',
    components: {},
    data() {
        return {
            formData: null
        };
    },
    mounted() {},
    methods: {
        // ///////////////////////////////////////////////////////////////////////////////////////

        onBack() {
            this.step -= 1;
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onCancel() {
            this.$emit('onCancel');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async onNext() {
            this.step += 1;
        }
    }
};
</script>

<style lang="scss">
#LoginPage {
}
</style>
