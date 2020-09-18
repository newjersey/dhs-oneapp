import _, { get } from 'lodash';

/**
 * This mixin provides all the basic machinary to support the props that an input field
 * of any type woild expect.
 */
const ModelsMixin = {
    data() {
        return {
        };
    },
    computed: {
        fields() {
            return this.$store.state.fields;
        },
        sections() {
            return this.$store.state.sections;
        },
        pages() {
            return this.$store.state.pages;
        },
        selectedSection: {
            get(){
                return this.$store.state.selectedSection;
            },
            set(val){
                this.$store.commit('setSelectedSection', val);
            }
        },
        selectedPage: {
            get(){
                return this.$store.state.selectedPage;
            },
            set(val){
                this.$store.commit('setSelectedPage', val);
            }
        }             
    },    
    mounted() {

    },  
    methods: {

        findSection(sectionId){
            for (let i=0; i<this.sections.length; i+=1){
                if (this.sections[i]._id+'' == sectionId){
                    return this.sections[i];
                }
            }
            throw new Error(`Could not find section ${sectionId}`);
        },

        findPage(pageId){
            for (let i=0; i<this.pages.length; i+=1){
                if (this.pages[i]._id+'' == pageId){
                    return this.pages[i];
                }
            }
            throw new Error(`Could not find page ${pageId}`);
        },

        findField(fieldId){
            for (let i=0; i<this.fields.length; i+=1){
                if (this.fields[i]._id+'' == fieldId){
                    return this.fields[i];
                }
            }
            throw new Error(`Could not find fieldId ${fieldId}`);
        }

    }
};

export default ModelsMixin;
