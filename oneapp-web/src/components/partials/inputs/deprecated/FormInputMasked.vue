<template>
    <validation-provider tag="div" :rules="opts.rules" :name="opts.name" :vid="vid" v-slot="v" v-if="linkedShow">
        <us-form-group
            :label="opts.label"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :description="opts.description"
            :error="v.errors[0]"
            label-class="oneapp-form-label"
            :valid="getValidationState(v)"
        >
            <the-mask
                v-if="opts && opts.mask"
                class="usa-input"
                :mask="opts.mask"
                :masked="false"
                :id="divId"
                :name="opts.name"
                v-model="currentValue"
                type="text"
                :disabled="opts.disabled"
                :class="{
                    'usa-input--error': valid === false,
                    'usa-input--success': valid === true
                }"
                :placeholder="opts.placeholder"
            >
            </the-mask>
        </us-form-group>
    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { TheMask } from 'vue-the-mask';
import InputMixin from '@/components/mixins/InputMixin.js';

export default {
    name: 'form-input-masked',
    components: {
        ValidationProvider,
        TheMask
    },
    mixins: [InputMixin],
    props: {
        // value, required, disabled, name, label, placeholder, description, hideLabel
        // provided by the InputMixin
    },
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
