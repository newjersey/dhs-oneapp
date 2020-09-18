import Vue from 'vue';
import Vuex from 'vuex';
import Section from '@/models/Section.js';
import Page from '@/models/Page.js';
import Field from '@/models/Field.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sections: [],
        pages: [],
        fields: [],
        selectedSection: {},
        selectedPage: {},
    },
    mutations: {
        setSections(state, sections){
            state.sections = sections;
        },
        setPages(state, pages){
            state.pages = pages;
        },
        setFields(state, fields){
            state.fields = fields;
        },
        setSelectedPage(state, page){
            state.selectedPage = page;
        },                        
        setSelectedSection(state, section){
            state.selectedSection = section;
        }                        
    },
    getters: {
        getSelectedSection(){
            return state.selectedSection;
        },
        getSelectedPage(){
            return state.selectedPage;
        },                
        getSections(){
            return state.sections;
        },
        getPages(){
            return state.pages;
        },
        getFields(){
            return state.fields;
        }        
    },
    actions: {

        // ///////////////////////////////////////////////////////////////////////////////////////

        async addSection({state, commit}){
            let section = new Section();
            await section.save();            
            state.sections.push(section);
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async addPage({state, commit}, sectionId){
            let page = new Page();
            page.sectionId = sectionId;
            await page.save();            
            state.pages.push(page);
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async addField({state, commit}, pageId){
            let field = new Field();
            field.pageId = pageId;
            await field.save();            
            state.fields.push(field);
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async loadConfig({ state, commit, dispatch }) {
            commit('setPages', await Page.getAll());
            commit('setSections', await Section.getAll());
            commit('setFields', await Field.getAll());            
        },

    },
    modules: {}
});
