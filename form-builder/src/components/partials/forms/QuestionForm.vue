<template>
    <div v-if="question">

        <b-row>
            <b-col>
                <form-input-text v-model="question.label" :config="{label: 'Label', required: true}"/>
            </b-col>
            <b-col>
                <form-input-text v-model="question.name" :config="{label: 'Name', required: false}"/>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <form-input-options 
                    v-model="question.type" 
                    :config="{
                        label: 'Type', 
                        selectOptions: fieldOptions,
                        selectKey: 'type',
                        selectLabel: 'label',
                        required: true
                    }"
                />
            </b-col>
            <b-col>
                <form-input-text v-model="question.key" :config="{label: 'Key', required: true}"/>
            </b-col>
        </b-row>

        <hr/>

        On answer X, link to page Y
    </div>
</template>

<script>

import FormInputText from '@/components/partials/form-inputs/FormInputText.vue';
import FormInputOptions from '@/components/partials/form-inputs/FormInputOptions.vue';


export default {
    name: 'question-form',
    components: {
        FormInputText,
        FormInputOptions
    },    
    props: {
        value: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            question: null,
            fieldOptions: [
                {type: 'text', label: 'Text'},
                {type: 'email', label: 'Email'},
                {type: 'password', label: 'Password'},
                {type: 'password-confirm', label: 'Password Confirmation'},
                {type: 'zip', label: 'Zip Code'},
                {type: 'ssn', label: 'SSN'},
                {type: 'state', label: 'State'},
                {type: 'phone', label: 'Phone Number'},
                {type: 'url', label: 'Url'},
                {type: 'divider', label: 'Section Divider'}
            ]
        };
    },      
    computed: {
        formConfig() {
            return this.$store.state.formConfig;
        }
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal != oldVal) {
                this.question = this.value;
            }
        }
    },    
    mounted(){
        this.question = this.value;
    }
};
</script>
