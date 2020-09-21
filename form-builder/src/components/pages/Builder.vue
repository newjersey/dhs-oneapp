<template>
    <b-container id="BuilderPage" fluid class="pt-3">
        
        <b-row class="px-2">
            
            <b-col md="3" class="px-1">
                <b-card>
                    <page-list v-model="selectedPage" />
                </b-card>
            </b-col>

            <b-col class="px-1">

                    <!--

                    <pre>{{selectedPage}}</pre>
                    -->

                <b-card class="mb-2" >
                    
                    <b-row>
                        <b-col v-if="selectedSection._id && selectedSection._id">
                            <form-input-text v-model="selectedSection.title" :config="{label: 'Section Title', required: true}"/>
                        </b-col>
                        <b-col v-if="selectedPage._id && selectedSection._id">
                            <form-input-text v-model="selectedPage.title" :config="{label: 'Page Title', required: true}"/>
                        </b-col>
                    </b-row>                    

                    <div align="right">
                        <b-button variant="primary" size="sm" class="mr-1" @click="onSaveSettings()"><i class="fas fa-save"></i> Save</b-button>                
                        <b-button variant="primary" size="sm"><i class="fas fa-trash"></i> Delete</b-button>                
                    </div>

                </b-card>

                <b-card v-if="selectedPage._id">

                    <b-row>
                        <b-col md="3">
                            <question-list v-model="selectedQuestion"/>
                        </b-col>
                        <b-col>
                            <div v-if="selectedPage._id && selectedQuestion">
                                <question-form v-model="selectedQuestion"></question-form>
                            </div>
                        </b-col>
                    </b-row>

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
            if (this.selectedPage && this.selectedPage.save){
                await this.selectedPage.save();
            }
            if (this.selectedSection && this.selectedSection.save){
                await this.selectedSection.save();
            }
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
