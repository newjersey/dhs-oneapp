<template>
    <section class="timeline-card">
        <div class="time-pill">{{ number }}</div>
        <div class="card-body">
            <h3 v-t>{{ title }}</h3>
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'timeline-card',
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        number: {
            type: [String, Number],
            default: 1
        },
        variant: {
            type: String,
            default: 'info'
        }
    }
};
</script>
<style lang="scss">
.timeline-card {
    //margin-top: 30px;
    //margin-bottom: 30px;

    padding: 0px;
    margin-left: 30px;
    margin-right: 30px;

    background-color: transparent;
    border-left: 8px solid #cccccc;

    .time-pill {
        position: relative;
        left: -22px;
        top: -10px;
        box-sizing: border-box;
        height: 36px;
        width: 36px;
        color: white;
        border: 4px solid #ffffff;
        border-radius: 18px;
        background-color: #757575;
        display: inline-block;
        font-size: 1em;
        font-weight: bold;
        line-height: 1.8em;
        text-align: center;
    }

    .card-body {
        margin-top: -70px;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-right: 25px;
        padding-left: 25px;

        h3 {
            font-size: 20px;
            margin-bottom: 15px;
        }
    }
}
</style>
