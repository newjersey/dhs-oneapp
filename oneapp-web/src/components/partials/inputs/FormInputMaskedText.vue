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
                v-mask="`${opts.mask}`"
            ></us-form-input>

            
        </us-form-group>

    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { mask } from 'vue-the-mask';
import InputMixin from '@/components/mixins/InputMixin.js';

export default {
    name: 'form-input-masked-text',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
    directives: { mask },
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
