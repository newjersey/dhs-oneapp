<template>
    <b-container id="BuilderPage" fluid>
        
        <h2>Builder</h2>

        <b-row class="px-2">
            
            <b-col md="2" class="px-1">
                <b-card title="Pages">
                    <page-list v-model="selectedPage" />
                </b-card>
            </b-col>

            <b-col md="3" class="px-1">
                <b-card title="Questions">
                    <question-list :page="selectedPage" v-model="selectedQuestion"/>
                </b-card>
            </b-col>

            <b-col class="px-1">

                <!--
                <b-card v-if="selectedPage" title="Form Settings" class="">
                    
                    <form-input-text v-model="selectedPage.title" :config="{label: 'Title', required: true}"/>

                    <b-button size="sm">
                        <i class="fas fa-trash"></i> Delete Page
                    </b-button>                

                </b-card>
                -->

                <b-card v-if="selectedPage" title="Page Settings" class="">
                    
                    <form-input-text v-model="selectedPage.title" :config="{label: 'Title', required: true}"/>

                    <b-button size="sm">
                        <i class="fas fa-trash"></i> Delete Page
                    </b-button>                

                </b-card>

                <b-card v-if="selectedQuestion" title="Question Settings" class="mt-2">
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
    .card-body {
        padding-left: 12px;
        padding-right: 12px;
    }
}
</style>
