<template>
    <b-container id="BuilderPage" fluid>
        
        <h2>Builder</h2>

        <b-row>
            
            <b-col md="2" class="">
                <page-list v-model="selectedPage" />
            </b-col>

            <b-col md="3" class="">
                <question-list :page="selectedPage" v-model="selectedQuestion"/>
            </b-col>

            <b-col>

                <b-card v-if="selectedPage" title="Form Settings">
                    <form-input-text v-model="selectedPage.title" :config="{label: 'Title', required: true}"/>
                </b-card>

                <b-card v-if="selectedQuestion" title="Question Settings" class="mt-3">
                    <question-form v-model="selectedQuestion"></question-form>
                </b-card>

            </b-col>

        </b-row>
        
    </b-container>
</template>

<script>
import PageList from '@/components/partials/lists/PageList.vue';
import QuestionList from '@/components/partials/lists/QuestionList.vue';
import FormInputText from '@/components/partials/form-inputs/FormInputText.vue';
import QuestionForm from '@/components/partials/forms/QuestionForm.vue';

export default {
    name: 'builder',
    components: {
        PageList,
        QuestionList,
        FormInputText,
        QuestionForm
    },
    data() {
        return {
            selectedPage: null,
            selectedQuestion: null
        };
    }    
};
</script>
<style lang="scss">
#BuilderPage {
}
</style>
