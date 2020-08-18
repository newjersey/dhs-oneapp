<template>
    <div id="ApplyPage">

        <us-card bg-variant="white">
            <form-builder v-model="formData" :config="config" />
        </us-card>

        <!--
        <pre>{{ formData }}</pre>
        -->
    </div>
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
#ApplyPage {
    .form-wrapper {
        width: 100%;
        min-width: 500px;
        max-width: 850px;
        margin: auto;
    }
}
</style>
