<template>
    <validation-observer class="validated-form" ref="observer" v-slot="{ handleSubmit }" v-if="page">
        <us-form @submit="handleSubmit(doSubmit)" v-if="formData" size="lg" class="mt-5 pb-3">
            <!-- SUPPORT FOR A SLOT -->
            <span v-if="page.slotId">
                <slot :name="page.slotId" v-bind:formData="page" />
            </span>

            <span v-else>
                <span v-for="(item, index) in page.fields" :key="index">
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

            <slot> </slot>
            <!-- FORM BUTTON (IF JUST ONE) -->
        </us-form>

        <!--
        <pre class="text-muted">{{ formData }}</pre>
        -->

        <pre>{{ page.fields }}</pre>
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
        page: {
            type: [Array, Object],
            default: null
        }
    },
    data() {
        return {
            formData: null,
            error: null
        };
    },
    mounted() {
        this.init();
    },
    computed: {},
    methods: {
        init() {
            this.formData = this.value;
            if (!this.formData) {
                this.formData = {};
            }
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
