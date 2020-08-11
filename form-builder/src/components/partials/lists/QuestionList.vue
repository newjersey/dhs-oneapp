<template>
    <div>        
        <b-list-group v-if="page">
            <b-list-group-item 
                v-for="(question, index) in page.fields" 
                :key="index" 
                :class="{'active':value && value == question}"
                class="d-flex justify-content-between align-items-center" 
                @click="onSelectQuestion(question)"
            >
                {{question.label}}
                <b-badge variant="light">{{question.type}}</b-badge>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'question-list',
    props: {
        value: {
            type: Object,
            default: null
        },
        page: {
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
    },
    methods: {
        onSelectQuestion(question){
            this.$emit('input', question);
        }
    }
};
</script>
