<template>
    <div class="info-card">
        <b-row>
            <b-col cols="auto">
                <i class="fas fa-info-circle fa-2x mt-3"></i>
            </b-col>

            <b-col class="mt-3 pl-0">
                <h3 v-t>{{ title }}</h3>
                <slot></slot>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'info-card',
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        variant: {
            type: String,
            default: 'info'
        }
    }
};
</script>
<style lang="scss">
.info-card {
    margin-top: 30px;
    margin-bottom: 30px;
    .row {
        margin-left: auto;
        margin-right: auto;
        background-color: #f1f1f1;
        border-left: 10px solid #01a6d2;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-right: 30px;
        h3 {
            font-size: 24px;
            margin-bottom: 20px;
        }
    }
}
</style>
