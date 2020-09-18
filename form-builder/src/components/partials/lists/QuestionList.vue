<template>
    <div id="QuestionList">        

        <div class="mb-3">
            Questions
            <b-button variant="link" class="m-0 p-0 mr-1" size="sm" @click="onAddQuestion()">
                <i class="fas fa-plus-circle"></i> Add Question
            </b-button>               
        </div>

        <b-list-group v-if="selectedPage">
            <b-list-group-item 
                v-for="(question, index) in fields" 
                :key="index" 
                :class="{'active':value && value == question}"
                class="d-flex justify-content-between align-items-center" 
                @click="onSelectQuestion(question)"               
            >
                <div>
                    <i class="far fa-question-circle"></i> {{question.label}}
                </div>
                <b-badge variant="info">{{question.type}}</b-badge>
            </b-list-group-item>
        </b-list-group>

    </div>
</template>

<script>
import ModelsMixin from '@/components/mixins/ModelsMixin';

export default {
    name: 'question-list',
    mixins: [ModelsMixin],
    props: {
        value: {
            type: Object,
            default: null
        }
    },
    components: {

    },
    data() {
        return {
            question: null
        };
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
    },
    methods: {

        async onAddQuestion(){
            await this.$store.dispatch('addField', this.selectedPage._id);
        },

        onSelectQuestion(question){
            this.$emit('input', question);
        }
    }
};
</script>
<style lang="scss">
#QuestionList {


    .list-group-item {

        font-size: 14px;
        margin-bottom: 3px;

    }
    
}
</style>