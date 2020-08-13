<template>
    <b-container id="CodePage" fluid>
        
        <h2>Form Config</h2>

        <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers :tabSize="4"></prism-editor>
        
    </b-container>
</template>

<script>
// import Prism Editor
  import { PrismEditor } from 'vue-prism-editor';
  import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

  // import highlighting library (you can use any library you want just return html string)
  import { highlight, languages } from 'prismjs/components/prism-core';
  import 'prismjs/components/prism-clike';
  import 'prismjs/components/prism-javascript';
  
  /*
prism-coy.css
prism-dark.css
prism-funky.css
prism-okaidia.css
prism-solarizedlight.css
prism-tomorrow.css
prism-twilight.css
  */
  import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

export default {
    name: 'builder',
    components: {
        PrismEditor
    },
    data() {
        return {
            selectedPage: null,
            selectedQuestion: null,
            code: ''
        };
    },
    computed: {
        formConfig() {
            return this.$store.state.formConfig;
        }
    },    
    mounted(){
        this.code = JSON.stringify(this.formConfig, null, 4);
    },
    methods: {
        highlighter(code) {
            return highlight(code, languages.js); //returns html
        }
    }   
};
</script>
<style lang="scss">
#CodePage {

    // required class
    .my-editor {
        // we dont use `language-` classes anymore so thats why we need to add background and text color manually
        background: #2d2d2d;
        color: #ccc;

        // you must provide font-family font-size line-height. Example:
        font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
        font-size: 12px;
        line-height: 1.5em;
        padding: 5px;
    }

    // optional class for removing the outline
    .prism-editor__textarea:focus {
        outline: none;
    }

}
</style>
