<template>
    <div>
        <h2 class="page-title" v-if="title">{{ title }}</h2>

        <us-step-indicator :step="pageIndex" :steps="pages" />

        <us-validated-form :config="pages[pageIndex].fields">
            <us-button type="button" variant="primary" class="mr-2" @click="onBack()" :disabled="pageIndex == 0"> <i class="fas fa-arrow-circle-left"></i> Back </us-button>

            <us-button type="submit" variant="primary" class="mr-2" @click="onNext()" v-if="pageIndex < noSteps - 1"> Next <i class="fas fa-arrow-circle-right"></i> </us-button>
            <span v-else>
                <us-button type="submit" variant="primary" class="mr-2">Continue</us-button>
                <us-button type="button" variant="link" class="ml-2">Submit an application with just my name and address</us-button>
            </span>

            <us-button type="button" variant="outline-primary" @click="onNext()">Skip</us-button>
        </us-validated-form>
    </div>
</template>

<script>
//import FormInput from '@/components/partials/forms/FormInput.vue';

export default {
    name: 'validated-form',
    components: {},
    props: {
        value: {
            default: null
        },
        title: {
            type: String,
            default: 'Form Title'
        },
        pages: {
            type: [Array, Object],
            default: null
        }
    },
    data() {
        return {
            pageIndex: 0,
            formData: null,
            error: null
        };
    },
    mounted() {
        this.init();
    },
    computed: {
        noSteps() {
            if (this.pages && this.pages.length) {
                return this.pages.length;
            }
            return 0;
        }
    },
    methods: {
        init() {
            this.formData = this.value;
            if (!this.formData) {
                this.formData = {};
            }
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onBack() {
            this.pageIndex -= 1;
            this.$emit('onBack');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onNext() {
            this.pageIndex += 1;
            this.$log('STEP: ', this.pageIndex);
            this.$emit('onNext');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onCancel() {
            this.$emit('onCancel');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async doSubmit() {
            this.$log('SUBMITTING 22222!!!!');
            this.$emit('input', this.formData);
            this.$nextTick(() => {
                this.$emit('onSubmit', this.formData);
            });
        }
    }
};
</script>
<style lang="scss">
.validated-form {
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
</style>
