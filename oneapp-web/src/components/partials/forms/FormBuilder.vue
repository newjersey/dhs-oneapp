<template>
    <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }">
        
        <h2 v-if="config[step].title">{{ config[step].title }}</h2>

        <us-row class="p-0">
            <us-col class="wizard-dashes" v-for="n in noSteps" :key="n" :class="{ active: n == step + 1, visited: n <= step }"> </us-col>
        </us-row>

        <h3 class="mt-3">
            <us-pill variant="primary">{{ step + 1 }}</us-pill>
            <span class="page-count mr-1"> of {{ noSteps }}</span>
            {{ config[step].title }}
        </h3>

        <us-form @submit="handleSubmit(doSubmit)" v-if="formData" size="lg" class="mt-5 pb-3">
            <!--
            <span v-for="(section, sectionIndex) in config[step].sections" :key="sectionIndex">            
                <span v-for="(item, index) in section.fields" :key="index">
                    <form-input :config="item" v-model="formData[item.key]" />
                </span>
            </span>
            -->

            <!-- SUPPORT FOR A SLOT -->
            <span v-if="config[step].slotId">
                <slot :name="config[step].slotId" v-bind:formData="config[step]" />
            </span>

            <span v-else>
                <span v-for="(item, index) in config[step].fields" :key="index">
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
                            <form-input :config="item" v-model="formData[item.key]" />
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

            <div class="mt-4" align="left">
                <us-button type="button" variant="primary" class="mr-2" @click="onBack()" :disabled="step == 0"><i class="fas fa-arrow-circle-left"></i> Back</us-button>

                <us-button type="submit" variant="primary" class="mr-2" @click="onNext()" v-if="step < noSteps - 1">Next <i class="fas fa-arrow-circle-right"></i></us-button>
                
                <us-button type="submit" variant="primary" class="mr-2" v-else>Submit</us-button>

                <us-button type="button" variant="outline-primary" @click="onNext()">Skip</us-button>
            </div>
        </us-form>

        <!--
        <pre class="text-muted">{{ formData }}</pre>
        -->
    </validation-observer>
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
        config: {
            type: [Array, Object],
            default: null
        }
    },
    data() {
        return {
            step: 0,
            formData: null,
            error: null
        };
    },
    mounted() {
        this.init();
    },
    computed: {
        noSteps() {
            if (this.config && this.config.length) {
                return this.config.length;
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
            this.step -= 1;
            this.$emit('onBack');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onNext() {
            this.step += 1;
            this.$log('STEP: ', this.step);
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

    .page-count {
        font-size: 15px;
        letter-spacing: 0;
        line-height: 18px;
    }

    h2 {
        font-size: 36px;
        letter-spacing: 0;
        line-height: 44px;
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 25px;
    }

    .wizard-dashes {
        height: 6px;
        background: #d6d7d9;
        margin-left: 2px;
        margin-right: 2px;

        &.visited {
            background: lighten(#0071bc, 55%);
        }

        &.active {
            background: #0071bc;
        }
    }
}
</style>
