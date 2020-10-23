<template>

    <validation-provider tag="div" :rules="opts.rules" :name="opts.name" :vid="vid" v-slot="v" v-if="linkedShow">

        <us-form-group
            :label="opts.label"
            :helpText="opts.help"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :error="opts.error || v.errors[0]"
            label-class="oneapp-form-label"
            :valid="getValidationState(v)"
        >
            <template v-slot:validation-error="{ error }">
                <span v-if="error" class="usa-error-message" id="input-error-message" role="alert" v-t>{{ error }}</span>
            </template>

            <us-form-radio
                :id="divId"
                :name="opts.name"
                :options="options"
                :labelField="opts.labelField"
                :keyField="opts.keyField"
                v-model="currentValue"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
                
            />
        </us-form-group>
    
    </validation-provider>
</template>
<script>
import { ValidationProvider } from 'vee-validate';
import InputMixin from '@/components/mixins/InputMixin.js';

export default {
    name: 'form-input-boolean',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
    data() {
        return {
            options: [
                {value: true, label: 'Yes'},
                {value: false, label: 'No'}
            ]
        };
    }
};
</script>

