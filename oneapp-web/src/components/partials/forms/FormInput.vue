<template>
    <!-- A form divider -->

    <div v-if="config.type == 'divider'" class="pt-3 mb-5">
        <hr />
        <h4 v-if="config.title">{{ config.title }}</h4>
        <p v-if="config.lead">{{ config.lead }}</p>
    </div>

    <!-- Phone Number (US) -->

    <form-input-masked-text v-else-if="config.type == 'phone'" v-model="currentValue" :config="{ ...config, mask: '(###) ###-####' }" />

    <!-- Social Security Number -->

    <form-input-masked-text v-else-if="config.type == 'ssn'" v-model="currentValue" :config="{ ...config, mask: '###-##-####' }" />

    <!-- Email -->

    <form-input-text v-else-if="config.type == 'email'" v-model="currentValue" :config="{ ...config, rules: 'required|email' }" />

    <!-- Url -->

    <form-input-masked-text v-else-if="config.type == 'url'" v-model="currentValue" :config="{ ...config, rules: 'required|url' }" />

    <!-- Zip Code -->

    <form-input-masked-text v-else-if="config.type == 'zip'" v-model="currentValue" :config="{ ...config, mask: '#####' }" />

    <!-- Default to text input -->

    <form-input-text v-else-if="config.type == 'text'" v-model="currentValue" :config="config" />

    <!-- Else, show an alert! -->

    <div v-else class="w-100">
        <form-input-text v-model="currentValue" :config="{ ...config, disabled: true, placeholder: `ERROR: ${config.type} is a unknown form input type` }" />
    </div>
</template>

<script>
import FormInputText from '@/components/partials/inputs/FormInputText.vue';
import FormInputMaskedText from '@/components/partials/inputs/FormInputMaskedText.vue';

/*
import FormInputPhone from '@/components/partials/inputs/FormInputPhone.vue';
import FormInputEmail from '@/components/partials/inputs/FormInputEmail.vue';
import FormInputUrl from '@/components/partials/inputs/FormInputUrl.vue';
import FormInputSocial from '@/components/partials/inputs/FormInputSocial.vue';
import FormInputZip from '@/components/partials/inputs/FormInputZip.vue';
*/

import ValueWatcherMixin from '@/components/mixins/ValueWatcherMixin.js';

/**
 * This is a generic form input, it figures out the specific input type from the configuration passed in
 */
export default {
    name: 'form-input',
    components: {
        FormInputText,
        FormInputMaskedText
    },
    mixins: [ValueWatcherMixin],
    props: {
        // value prop provided by the InputMixin
        config: {
            type: Object
        }
    },
    data() {
        // isUpdating, currentValue provided by the InputMixin
        return {};
    }
};
</script>
