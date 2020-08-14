<template>
    <div>        

        <b-button variant="secondary" class="mb-1" size="sm">
            <i class="fas fa-plus-circle"></i> Add page
        </b-button>

        <b-list-group>
            <b-list-group-item 
                v-for="(page, index) in formConfig" 
                :key="index" 
                :class="{'active':value && value.id == page.id}"
                class="d-flex justify-content-between align-items-center" 
                @click="onSelectPage(page)"                
            >
                {{page.title}}
            </b-list-group-item>
        </b-list-group>

    </div>
</template>

<script>
export default {
    name: 'page-list',
    components: {

    },
    props: {
        value: {
            default: null
        }
    },
    data() {
        return {
        };
    },      
    computed: {
        formConfig() {
            return this.$store.state.formConfig;
        }
    },  
    methods: {
        onSelectPage(page){
            this.$emit('input', page);
        }
    }
};
</script>
