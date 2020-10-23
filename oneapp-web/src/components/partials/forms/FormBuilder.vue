<template>
    <div>
        <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }">

            <h2 class="page-title" v-if="pages[pageIndex].title">{{ pages[pageIndex].title }}</h2>

            <us-row class="p-0">
                <us-col class="wizard-dashes" v-for="n in noSteps" :key="n" :class="{ active: n == pageIndex + 1, visited: n <= pageIndex }"> </us-col>
            </us-row>

            <us-step-indicator :step="pageIndex" :steps="pages" />
        
            <us-form @submit="handleSubmit(doSubmit)" v-if="formData" size="lg" class="mt-5 pb-3">

                <!-- SUPPORT FOR A SLOT -->
                <span v-if="pages[pageIndex].slotId">
                    <slot :name="pages[pageIndex].slotId" v-bind:formData="page" />
                </span>

                <span v-else>
                    <span v-for="(item, index) in pages[pageIndex].fields" :key="index">
                        <!-- If this item is just an array of other items -->

                        <us-row v-if="Array.isArray(item)">
                            <us-col
                                v-for="subItem in item"
                                :key="subItem.key"
                                :sm="subItem.col && subItem.col.sm ? subItem.col.sm : null"
                                :md="subItem.col && subItem.col.md ? subItem.col.md : null"
                                :lg="subItem.col && subItem.col.lg ? subItem.col.lg : null"
                                :xl="subItem.col && subItem.col.xl ? subItem.col.xl : null"
                            >
                                <form-input :config="subItem" v-model="formData[subItem.key]" />
                            </us-col>
                        </us-row>

                        <!-- If this item is of type row with more col info -->

                        <us-row v-else-if="item.type == 'row'">
                            <us-col
                                v-for="subItem in item.fields"
                                :key="subItem.key"
                                :sm="subItem.col && subItem.col.sm ? subItem.col.sm : null"
                                :md="subItem.col && subItem.col.md ? subItem.col.md : null"
                                :lg="subItem.col && subItem.col.lg ? subItem.col.lg : null"
                                :xl="subItem.col && subItem.col.xl ? subItem.col.xl : null"
                            >
                                <form-input :config="subItem" v-model="formData[subItem.key]" />
                            </us-col>
                        </us-row>

                        <!-- Otherwise, simple case -->

                        <form-input :config="item" v-model="formData[item.key]" />
                    </span>
                </span>

                <!-- FORM BUTTON (IF JUST ONE) -->

                <div class="mt-4" style="width:100%" align="left">
                    <us-button type="button" variant="primary" class="mr-2" @click="onBack()" :disabled="pageIndex == 0"><i class="fas fa-arrow-circle-left"></i> Back</us-button>

                    <span v-if="pageIndex < noSteps - 1">
                        <us-button type="submit" variant="primary" class="mr-2" @click="onNext()">
                            Next <i class="fas fa-arrow-circle-right"></i>
                        </us-button>
                        <us-button type="button" variant="outline-primary" @click="onNext()">Skip</us-button>
                    </span>
                    <span v-else>
                        <us-button type="submit" variant="primary" class="">Continue</us-button>
                        <us-button type="button" variant="link">Submit an application with just my name and address</us-button>
                    </span>

                </div>
            </us-form>

            <!--
            <pre class="text-muted">{{ formData }}</pre>
            -->
        </validation-observer>
    </div>
</template>

<script>
import FormInput from '@/components/partials/forms/FormInput.vue';

export default {
    name: 'validated-form',
    components: { FormInput },
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
            sectionIndex: 0,
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
