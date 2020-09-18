<template>
    <div id="PageList">        

        <b-button variant="secondary" class="mb-1" size="sm">
            <i class="fas fa-plus-circle"></i> Add page
        </b-button>

        <b-row>

            <b-col>
                <b-list-group>

                    <b-list-group-item 
                        v-for="(section, index) in formConfig" :key="index"          
                        :class="{'active': selectedSection.id == section.id}"
                        class="d-flex justify-content-between align-items-center" 
                        @click="selectedSection = section"                
                    >
                        <div v-if="section.type != 'section'"><i class="far fa-file-alt mr-1"></i> {{section.title}}</div>
                        <div v-if="section.type == 'section' && selectedSection.id == section.id"><i class="far fa-folder-open mr-1"></i> {{section.title}}</div>
                        <div v-if="section.type == 'section' && selectedSection.id != section.id"><i class="far fa-folder mr-1"></i> {{section.title}}</div>
                    </b-list-group-item>

                </b-list-group>                
            </b-col>

            <b-col>
                
                <b-list-group v-if="selectedSection && selectedSection.type == 'section'" >

                    <b-list-group-item 
                        v-for="(page, index) in selectedSection.pages" :key="index"          
                        :class="{'active': selectedPage.id == page.id}"
                        class="d-flex justify-content-between align-items-center" 
                        @click="onSelectPage(page)"                
                    >
                        <div><i class="far fa-file-alt mr-1"></i> {{page.title}}</div>
                    </b-list-group-item>

                </b-list-group>     

                <div v-else>{{selectedSection.title}}</div>

            </b-col>

        </b-row>


<!--
        <div v-for="(section, index) in formConfig" :key="index">

            <div class="list-subtitle">{{section.title}}</div>

            <b-list-group v-if="section.type == 'section'">

                <b-list-group-item 
                    v-for="(page, index) in section.pages"                    
                    :key="index" 
                    :class="{'active':value && value.id == page.id}"
                    class="d-flex justify-content-between align-items-center" 
                    @click="onSelectPage(page)"                
                >
                    {{page.title}}
                </b-list-group-item>

            </b-list-group>
            
        </div>             

-->
    </div>
</template>

<script>
export default {
    name: 'section-list',
    components: {

    },
    props: {
        value: {
            default: null
        }
    },
    data() {
        return {
            selected: {},
        };
    },      
    computed: {
        formConfig() {
            return this.$store.state.formConfig;
        }
    },  
    methods: {
        onSelect(item){
            this.selected = item;
            this.$emit('input', item);
        }
    }
};
</script>
<style lang="scss">
#PageList {

    .list-subtitle {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

}
</style>
