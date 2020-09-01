<template>
    <!-- A form divider -->

    <div v-if="config.type == 'divider'" class="pt-3 mb-5">
        <hr />
        <h4 v-if="config.title">{{ config.title }}</h4>
        <p v-if="config.lead">{{ config.lead }}</p>
    </div>

    <!-- Phone Number (US) -->

    <form-input-masked-text v-else-if="config.type == 'phone'" v-model="currentValue" :config="{ ...config, mask: '###-###-####' }" />

    <!-- Social Security Number -->

    <form-input-masked-text v-else-if="config.type == 'ssn'" v-model="currentValue" :config="{ ...config, mask: '###-##-####' }" />

    <!-- Email -->

    <form-input-text v-else-if="config.type == 'email'" v-model="currentValue" :config="{ ...config, rules: {required:true, email:true} }" />

    <!-- Password -->

    <form-input-text type="password" v-else-if="config.type == 'password'" v-model="currentValue" :config="{ ...config, rules: 'required|password-complex' }" />
    <form-input-text type="password" v-else-if="config.type == 'password-confirm'" v-model="currentValue" :config="{ ...config, rules: 'required|confirmed:pwdConfirmedVid' }" />

    <!-- Url -->

    <form-input-masked-text v-else-if="config.type == 'url'" v-model="currentValue" :config="{ ...config, rules: {required:true, url:true} }" />

    <!-- Zip Code -->

    <form-input-masked-text v-else-if="config.type == 'zip'" v-model="currentValue" :config="{ ...config, mask: '#####' }" />

    <!-- A list of options, where each option is just text -->

    <form-input-select v-else-if="config.type == 'combo-box'" v-model="currentValue" :config="config" />

    <!-- Default to text input -->

    <form-input-text v-else-if="config.type == 'text'" v-model="currentValue" :config="config" />

    <!-- Else, show an alert! -->

    <div v-else class="w-100">
        <form-input-text v-model="currentValue" :config="{ ...config, disabled: true, placeholder: `ERROR: ${config.type} is a unknown form input type` }" />
    </div>

</template>

<script>
import FormInputText from '@/components/partials/inputs/FormInputText.vue';
import FormInputSelect from '@/components/partials/inputs/FormInputSelect.vue';
import FormInputMaskedText from '@/components/partials/inputs/FormInputMaskedText.vue';
import ValueWatcherMixin from '@/components/mixins/ValueWatcherMixin.js';

/**
 * This is a generic form input, it figures out the specific input type from the configuration passed in
 * and sets up appropriate rules and masking
 */
export default {
    name: 'form-input',
    components: {
        FormInputText,
        FormInputSelect,
        FormInputMaskedText
    },
    data(){
        return {
            // isUpdating, currentValue provided by the InputMixin
            passwordRules: {
                required: true, 
                alpha_num: true, 
                min: {length: 8}, 
                max: {length: 15}
            }
        }
    },
    mixins: [ValueWatcherMixin],
    props: {
        // value prop provided by the InputMixin
        config: {
            type: Object
        }
    }
};
</script>
