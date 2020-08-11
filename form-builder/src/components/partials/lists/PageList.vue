<template>
    <div>
        
        <b-list-group>
            <b-list-group-item 
                button v-for="(page, index) in formConfig" 
                :key="index" 
                :class="{'active':value && value.id == page.id}"
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
