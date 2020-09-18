<template>
    <div id="PageList">        
    
        <div class="mb-3">
            Sections
            <b-button variant="link" class="m-0 p-0 mr-2" size="sm" @click="onAddSection()">
                <i class="fas fa-plus-circle"></i> Add Section
            </b-button>   
            <b-button variant="link" class="m-0 p-0 \" size="sm" @click="selectedSection = {}">
                <i class="fas fa-sitemap"></i> Show All Pages
            </b-button>               
        </div>

        <b-list-group>
            
            <span v-for="(section, index) in sections" :key="index">
                <drop 
                    class="drop" 
                    @drop="onDropPageOnSection" 
                    @dragover="hoveredSection = section._id"
                    @dragleave="hoveredSection = null"                                                
                >
                    <b-list-group-item 
                        :id="`form-section-${section._id}`"
                        :class="{
                            'active': selectedSection._id == section._id,
                            'over': hoveredSection && hoveredSection == section._id                                
                        }"
                        class="d-flex justify-content-between align-items-center" 
                        @click="onSelectSection(section)"                
                    >
                            <div v-if="selectedSection._id == section._id"><i class="far fa-folder-open mr-1"></i> {{section.title}}</div>
                            <div v-if="selectedSection._id != section._id"><i class="far fa-folder mr-1"></i> {{section.title}}</div>
                            <div class="section-drag-handle"><i class="fas fa-grip-lines"></i></div>
                    </b-list-group-item>
                </drop>
            </span>

        </b-list-group>         

        <div class="mt-3">
            Pages <span class="text-muted small">{{selectedSection.title}}</span>
            <b-button v-if="selectedSection && selectedSection._id" variant="link" class="m-0 p-0" size="sm" @click="onAddPage()">
                <i class="fas fa-plus-circle"></i> Add page
            </b-button>   
        </div>

        <div class="mt-3">
                    
            <b-list-group>

                <draggable v-model="selectedPages" group="pages" @end="onDropPage" handle=".page-drag-handle">
                    <span v-for="(page, index) in selectedPages" :key="index">
                        <drag class="drag" :transfer-data="{ pageId: page._id }">
                            <b-list-group-item 
                                :class="{'active': selectedPage._id == page._id}"
                                class="d-flex justify-content-between align-items-center" 
                                @click="onSelectPage(page)"                
                            >                                                                
                                <div>
                                    <i class="far fa-file-alt mr-1"></i> 
                                    {{page.title || page._id}} 
                                    <b-badge>{{page.order}}</b-badge>
                                </div>
                                <div class="page-drag-handle"><i class="fas fa-grip-lines"></i></div>                                
                            </b-list-group-item>
                        </drag>
                    </span>
                </draggable>

            </b-list-group>     

        </div>    

    </div>
</template>

<script>
import _ from 'lodash';
import ModelsMixin from '@/components/mixins/ModelsMixin';
import Draggable from 'vuedraggable';
// @see https://github.com/cameronhimself/vue-drag-drop#readme
import { Drag, Drop } from 'vue-drag-drop';

export default {
    name: 'page-list',
    components: {
        Drag, 
        Drop, 
        Draggable
    },
    mixins: [ModelsMixin],
    props: {
        value: {
            default: null
        }
    },
    data() {
        return {
            hoveredSection: null
        };
    },      
    computed: {
        selectedPages: {
            get(){
                let filtered = _.filter(this.pages, (page)=>{
                    return (!this.selectedSection._id || page.sectionId == this.selectedSection._id)
                })
                return _.orderBy(filtered, ['order'], ['asc']);
            },
            set(val){
                console.log(val)
            }
        },
        sections() {
            return this.$store.state.sections;
        },
        pages: {
            get(){
                return this.$store.state.pages;
            },
            set(val){
                console.log(val)
            }
        }        
    },  
    methods: {


        async onAddSection(){
            await this.$store.dispatch('addSection');
        },

        async onAddPage(){
            if (!this.selectedSection || !this.selectedSection._id){
                this.$logWarn(`No section selected!`);
                return;
            }
            await this.$store.dispatch('addPage', this.selectedSection._id);
        },

        async onDropPageOnSection(data, event){
            
            let sectionId = event.target.id;

            if (sectionId && sectionId.search('form-section') !== -1){


                try {
                    sectionId = sectionId.replace('form-section-','');
                    let page = this.findPage(data.pageId);
                    let section = this.findSection(sectionId);

                    page.sectionId = sectionId;
                    await page.save();
                    //this.$log('page = ', page);
                    //this.$log('section = ', section);
                    //this.$log(`Dropped page ${data.pageId} on section ${sectionId}`);

                }
                catch(err){
                    this.$logError(`No page found for ${data.pageId} and section ${sectionId}`)
                }
            }
            else {
                this.$log('drop - ', event)
            }

        },

        onDropPage(data){
            this.$log('Dropped!', data)
            //const relatedElement = relatedContext.element;
            //const draggedElement = draggedContext.element;
        },

        onSelectSection(section){
            this.selectedPage = {};
            this.selectedSection = section
        },

        onSelectPage(page){
            this.selectedPage = page;
            //this.$emit('input', page);
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

    .list-group-item {

        font-size: 14px;
        margin-bottom: 3px;

        &.over {
            background: rgba(132, 183, 237, 0.2);
            border-color: rgba(132, 183, 237, 0.8);
            color: inherit;
        }
    }
    
}
</style>
