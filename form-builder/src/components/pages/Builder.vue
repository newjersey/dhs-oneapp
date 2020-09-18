<template>
    <b-container id="BuilderPage" fluid class="pt-3">
        
        <b-row class="px-2">
            
            <b-col md="4" class="px-1">
                <b-card>
                    <page-list v-model="selectedPage" />
                </b-card>
            </b-col>

            <b-col class="px-1">

                    <!--

                    <pre>{{selectedPage}}</pre>
                    -->

                <b-card v-if="selectedPage._id && selectedSection._id" class="mb-2" >
                    
                    <b-row>
                        <b-col>
                            <form-input-text v-model="selectedSection.title" :config="{label: 'Section Title', required: true}"/>
                        </b-col>
                        <b-col>
                            <form-input-text v-model="selectedPage.title" :config="{label: 'Page Title', required: true}"/>
                        </b-col>
                    </b-row>                    

                    <div align="right">
                        <b-button variant="primary" size="sm" class="mr-1" @click="onSaveSettings()"><i class="fas fa-save"></i> Save</b-button>                
                        <b-button variant="primary" size="sm"><i class="fas fa-trash"></i> Delete</b-button>                
                    </div>

                </b-card>

                <b-card v-if="selectedPage._id">
                    <question-list v-model="selectedQuestion"/>
                </b-card>

                <b-card v-if="selectedPage._id && selectedQuestion" title="Question Settings" class="mt-2">
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
import ModelsMixin from '@/components/mixins/ModelsMixin';

export default {
    name: 'builder',
    mixins: [ModelsMixin],
    components: {
        PageList,
        QuestionList,
        FormInputText,
        QuestionForm
    },
    data() {
        return {
            selectedQuestion: null
        };
    },
    async mounted(){
        await this.$store.dispatch('loadConfig');
    },
    methods: {
        async onSaveSettings(){
            await this.selectedPage.save();
            await this.selectedSection.save();
        }
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
