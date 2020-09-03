import _ from 'lodash';

/**
 * This mixin provides all the basic machinary to support the props that an input field
 * of any type woild expect.
 */
const baseInputMixin = {
    props: {
        value: {
            default: ''
        },
        // Option to pass in props as an object (but not the value/v-model)
        config: {
            type: Object,
            default() {
                return {
                    required: false,
                    disabled: false,
                    name: '',
                    label: '',
                    // validationMode, @see https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#interaction-modes
                    validationMode: 'aggressive', 
                    rules: 'required',
                    placeholder: null,
                    description: null
                };
            }
        }
    },
    data() {
        return {
            opts: {},
            divId: null,
            isUpdating: false,
            vid: null,
            currentValue: ''
        };
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal != oldVal) {
                this.__onInputChanged();
            }
        },
        currentValue(val) {
            if (!this.isUpdating) {

                this.$log('Value: ', this.value);
                this.$log('CurrentValue: ', this.currentValue);
                
                // allows us to use v-model on our input.
                this.$emit('input', val);
            }
        }
    },
    created() {},
    mounted() {

        this.opts = this.config;

         // validate on blur, default validates on input and blur
        //this.opts.validationMode = 'lazy';

        // If a config object is NOT passed in as a prop, map to
        // the other props. This allows you to pass the other props
        // such as name, lavel etc. in a config option. For example;
        // config = {name:'', label:'', description:''}
        /*
        if (!_.isEmpty(this.opts)){
            Object.keys(this.config).forEach(prop => {
                this.opts[prop] = this.config[prop];
            });
        }
        */

        // Default rules is just the required rule.
        if (!this.opts.rules) {
            this.opts.rules = 'required';
        }

        // If not required, set the rules to null
        if (!this.opts.required) {
            this.opts.rules = null;
        }

        // Create a unique div id
        this.divId = `id-` + _.random(100, 10000);

        // If the name isn't given, then create (this helps with screen readers)
        // so we can make sure labels are associated with inputs
        if (!this.opts.name) {
            this.opts.name = 'name-' + this.divId;
        }

        // Special case, to allow for password-confirmation vee-validate needs a 'vid' to target
        if (this.config.type == 'password'){
            this.vid = "pwdConfirmedVid";
        }
        else {
            this.vid = 'vid-' + this.divId;
        }

        this.__onInputChanged();
    },
    methods: {
        /**
         * Respond to the input (v-model) being changed
         */
        __onInputChanged() {
            try {

                // Note that we're updating, so the watcher won't respond
                this.isUpdating = true;

                // Set the internal value to the v-model value (i.e. copy the
                // data passed in from parent component as the v-model prop to
                // a local value so we can mutated it.)
                this.currentValue = this.value;

                this.$nextTick(() => {
                    this.isUpdating = false;
                });
            }
            catch(err){
                this.$logError('Error in InputMixin; ', err);
            }
        },

        getValidationState({ dirty, validated, valid = null }) {
            if (!this.opts.required) {
                return null;
            }
            return dirty || validated ? valid : null;
        }
    }
};

export default baseInputMixin;
