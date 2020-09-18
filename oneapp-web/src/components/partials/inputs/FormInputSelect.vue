<template>
    <validation-provider tag="div" :rules="opts.rules" :name="opts.name" :vid="vid" v-slot="v">
        <us-form-group
            :label="opts.label"
            :helpText="opts.help"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :error="opts.error || v.errors[0]"
            label-class="oneapp-form-label"
        >
            <template v-slot:validation-error="{ error }">
                <span v-if="error" class="usa-error-message" id="input-error-message" role="alert" v-t>{{ error }}</span>
            </template>

            <us-combo-box
                :id="divId"
                :name="opts.name"
                :options="opts.options"
                v-model="currentValue"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
                :valid="getValidationState(v)"
            ></us-combo-box>
        </us-form-group>
    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import InputMixin from '@/components/mixins/InputMixin.js';

export default {
    name: 'form-input-text',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
    props: {
        // value, required, disabled, name, label, placeholder, description, hideLabel
        // provided by the InputMixin
    },
    mounted() {},
    data() {
        // divId, isUpdating, vid, currentValue, inputName
        // provided by the InputMixin
        return {};
    },
    methods: {
        // getValidationState method provided by InputMixin
    }
};
</script>
