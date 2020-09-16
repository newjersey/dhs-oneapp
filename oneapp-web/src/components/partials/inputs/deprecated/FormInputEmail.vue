<template>
    <validation-provider tag="div" :rules="{ 'required|email': opts.required }" :name="opts.name" :vid="vid" v-slot="v">
        <us-form-group :label="opts.label" :label-sr-only="opts.hideLabel" :label-for="divId" :description="opts.description" :error="v.errors[0]" label-class="oneapp-form-label">
            <us-form-input
                :id="divId"
                :name="opts.name"
                v-model="currentValue"
                type="text"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
                :state="getValidationState(v)"
            ></us-form-input>
        </us-form-group>
    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import InputMixin from '@/components/mixins/InputMixin.js';

export default {
    name: 'form-input-email',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
    props: {
        // value, required, disabled, name, label, placeholder, description
        // provided by the InputMixin
        hideLabel: {
            type: Boolean,
            default: false
        }
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
