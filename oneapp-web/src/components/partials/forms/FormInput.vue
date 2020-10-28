<template>
    <!-- A form divider -->

    <div v-if="config.type == 'divider'" class="pt-3 mb-5">
        <hr />
        <h4 v-if="config.title">{{ config.title }}</h4>
        <p v-if="config.lead">{{ config.lead }}</p>
    </div>

    <p v-else-if="config.type == 'statement'">
        {{ config.lead }}
    </p>

    <us-form-group v-else :label="config.label" :helpText="config.help" :label-sr-only="config.hideLabel" label-class="oneapp-form-label">
        <!-- Using a slot for the error message so we can surface it for translation -->
        <template v-slot:validation-error="{ error }">
            <span v-if="error" class="usa-error-message" id="input-error-message" role="alert" v-t>{{ error }}</span>
        </template>

        <!-- A list of options, where each option is check -->

        <us-form-checkbox
            v-if="config.type == 'checkbox'"
            :name="config.name"
            :options="config.options"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- A list of options, where each option is check -->

        <us-form-radio
            v-else-if="config.type == 'radio'"
            :name="config.name"
            :options="config.options"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- A list of options, where each option is just text -->

        <us-form-combobox
            v-else-if="config.type == 'combobox' || config.type == 'dropdown'"
            :options="config.options"
            :name="config.name"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- Boolean (yes/no) input -->

        <us-form-boolean
            v-else-if="config.type == 'boolean'"
            :name="config.name"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- Zip code -->

        <us-form-input-masked
            v-else-if="config.type == 'zip'"
            mask="#####"
            :name="config.name"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- Phone Number (US) -->

        <us-form-input-masked
            v-else-if="config.type == 'phone'"
            mask="###-###-####"
            :name="config.name"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- Social Security Number -->

        <us-form-input-masked
            v-else-if="config.type == 'ssn'"
            mask="###-##-####"
            :name="config.name"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- Email -->

        <us-form-input
            v-else-if="config.type == 'email'"
            :name="config.name"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            type="email"
            :rules="{ required: true, email: true }"
            v-model="currentValue"
        />

        <!-- Default to text input -->

        <us-form-input
            v-else-if="config.type == 'text'"
            :name="config.name"
            :type="config.type || 'text'"
            :disabled="config.disabled"
            :placeholder="config.placeholder"
            :required="config.required"
            :rules="{ required: true }"
            v-model="currentValue"
        />

        <!-- Else, show an alert! -->

        <div v-else class="w-100 mt-2 mb-2">
            <us-alert variant="warning" :title="`${config.type} is a unknown field type`">
                {{ config.label }}
            </us-alert>
        </div>
    </us-form-group>
</template>

<script>
/**
 * This is a generic form input, it figures out the specific input type from the configuration passed in
 * and sets up appropriate rules and masking
 */
export default {
    name: 'form-input',
    props: {
        value: {
            default: ''
        },
        config: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            isUpdating: false,
            currentValue: null
        };
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal != oldVal) {
                this.__onValueChanged();
            }
        },
        currentValue(val) {
            if (!this.isUpdating) {
                // allows us to use v-model on our input.
                this.$emit('input', val);
            }
        }
    },
    mounted() {
        this.currentValue = this.value;
        console.log('Setting value to ', this.value);
    },
    methods: {
        __onValueChanged() {
            this.isUpdating = true;
            this.currentValue = this.value;
            this.$nextTick(() => {
                this.isUpdating = false;
            });
        }
    }
};
</script>
