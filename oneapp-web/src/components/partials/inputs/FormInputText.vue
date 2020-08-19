<template>
    <validation-provider tag="div" :rules="opts.rules" :name="opts.name" :vid="vid" v-slot="v">
        
        <us-form-group 
            :label="opts.label" 
            :label-sr-only="opts.hideLabel" 
            :label-for="divId" 
            :description="opts.description" 
            :error="v.errors[0]"
            label-class="oneapp-form-label">
            
            <us-form-input
                :id="divId"
                :name="opts.name"
                v-model="currentValue"
                type="text"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
                :valid="getValidationState(v)"
            ></us-form-input>

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
