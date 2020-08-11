<template>
    <validation-provider
        tag="div"
        :rules="{ required: 'required|url' }"
        :name="inputName"
        :vid="vid"
        v-slot="v"
    >
        <b-form-group
            :label="opts.label"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :description="opts.description"
            label-class="oneapp-form-label"
        >
            <b-form-input
                :id="divId"
                :name="opts.name"
                v-model="currentValue"
                type="text"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
                :state="getValidationState(v)"
                v-mask="'(###) ###-####'"
            ></b-form-input>
            <b-form-invalid-feedback>{{ v.errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
    </validation-provider>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import InputMixin from '@/components/mixins/InputMixin.js';

// Custom url rul
extend('url', str => {
    // eslint-disable-next-line
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

    if (str.match(regex)) {
        return true;
    } else {
        return 'Must be a valid URL.';
    }
});

export default {
    name: 'form-input-text',
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
