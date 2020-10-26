<template>
    <us-container id="OneAppPage" align="left">
        <div class="form-wrapper px-sm-2 px-md-6 px-lg-8">
            <h2 class="page-title" v-if="section && section.title">{{ config[0].title }}</h2>

            <us-step-indicator :step="step" :steps="section.pages" />

            <span v-for="(page, index) in section.pages" :key="index">
                <us-form @submit="doSubmit" size="lg" class="mt-5 pb-3" v-if="step == index">
                    <span v-for="(item, index) in page.fields" :key="index">
                        <form-input :config="item" v-model="formData[item.key]" />
                    </span>

                    <div class="mt-4" style="width: 100%" align="left">
                        <us-button type="button" variant="primary" class="mr-2" @click="onBack()" :disabled="step == 0"><i class="fas fa-arrow-circle-left"></i> Back</us-button>

                        <span v-if="step < noSteps - 1">
                            <us-button type="submit" variant="primary" class="mr-2"> Next <i class="fas fa-arrow-circle-right"></i> </us-button>
                            <us-button type="button" variant="outline-primary" @click="onNext()">Skip</us-button>
                        </span>
                        <span v-else>
                            <us-button type="submit" variant="primary" class="">Continue</us-button>
                            <us-button type="button" variant="link">Submit an application with just my name and address</us-button>
                        </span>
                    </div>
                </us-form>
            </span>

            <pre>{{ formData }}</pre>
        </div>
    </us-container>
</template>

<script>
//import FormBuilder from '@/components/partials/forms/FormBuilder';
import formConfig from '@/assets/form.config.js';
import FormInput from '@/components/partials/forms/FormInput.vue';

export default {
    name: 'one-app',
    components: { FormInput },
    data() {
        return {
            //formData: {},
            config: formConfig,
            sectionIndex: 0,
            step: 3
        };
    },
    computed: {
        section() {
            return this.config[this.sectionIndex];
        },
        noSteps() {
            if (this.section.pages && this.section.pages.length) {
                return this.section.pages.length;
            }
            return 0;
        },
        formData: {
            get() {
                return this.$store.state.formData;
            },
            set(val) {
                this.$store.commit('setFormData', val);
            }
        }
    },
    mounted() {},
    methods: {
        // ///////////////////////////////////////////////////////////////////////////////////////

        async onBack() {
            //this.$router.go({name: 'one-app', params:{step: this.step-1} })
            this.step -= 1;
            //await this.$refs.observer.validate();
            this.$emit('onBack');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async onNext() {
            this.$log('STEP: ', this.step);
            this.step += 1;
            //await this.$refs.observer.validate();
            this.$emit('onNext');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onCancel() {
            this.$emit('onCancel');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async doSubmit() {
            this.step += 1;
            this.$emit('input', this.formData);
            this.$nextTick(() => {
                this.$emit('onSubmit', this.formData);
            });
        }
    }
};
</script>

<style lang="scss">
#OneAppPage {
    .form-wrapper {
        width: 100%;
        //max-width: 850px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 30px;
        margin-bottom: 40px;
        padding-bottom: 40px;
        margin-top: 50px;
        background-color: white;
        border: 1px solid #e6e6e6;

        padding-bottom: 40px;

        .page-title {
            font-size: 36px;
            letter-spacing: 0;
            line-height: 44px;
        }

        .page-sub-title {
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 25px;
        }
    }
}
</style>
