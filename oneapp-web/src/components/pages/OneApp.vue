<template>
    <us-container id="OneAppPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">
            <form-builder v-model="formData" :pages="config[0].pages" :title="config[0].title" />
        </div>

        <!--
        <pre>{{ formData }}</pre>
        -->
    </us-container>
</template>

<script>
import FormBuilder from '@/components/partials/forms/FormBuilder';
import formConfig from '@/assets/form.config.js';

export default {
    name: 'one-app',
    components: { FormBuilder },
    data() {
        return {
            formData: null,
            config: formConfig
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
#OneAppPage {
    .form-wrapper {
        width: 100%;
        //max-width: 850px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 30px;
        margin-bottom: 40px;
        padding-bottom: 40px;
        margin-top: 50px;
        background-color: white;
        border: 1px solid #e6e6e6;
    }
}
</style>
