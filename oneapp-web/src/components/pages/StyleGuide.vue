<template>
    <div id="StyleGuidePage">
        <us-container>
            <h1>Style Guide</h1>

            <!-- Main typography -->

            <section>
                <h1>This is a H1</h1>
                <h2>This is a H2</h2>
                <h3>This is a H3</h3>
                <h4>This is a H4</h4>
                <p>This is a paragraph, p tag</p>
                <a href="#">This is a link</a>
            </section>

            <!-- Text utilities -->

            <section>
                <us-row gutter="lg">
                    <us-col>
                        <div v-for="(variant, index) in variants" :key="index" :variant="variant" class="mb-1 p-05" :class="`text-${variant} text-bg-${variant}`">
                            This is {{ variant }} text with it's complimentary background.
                        </div>
                    </us-col>
                    <us-col>
                        <div v-for="(variant, index) in variants" :key="index" :variant="variant" class="mb-1 p-05" :class="`text-${variant}`">This is {{ variant }} text.</div>
                    </us-col>
                </us-row>
            </section>

            <!-- Buttons -->

            <section>
                <us-button v-for="(variant, index) in btnVariants" block :key="index" :variant="variant" class="m-1"> This is a {{ variant }} button. </us-button>

                <br />

                <us-button block size="lg" variant="primary" class="m-1"> This is a large button. </us-button>
            </section>

            <!-- Cards -->

            <section>
                <us-card
                    title="This is the title"
                    v-for="(variant, index) in cardVariants"
                    :key="index"
                    :bg-variant="variant.bg"
                    :text-variant="variant.txt"
                    :border-variant="variant.border"
                    class="m-1"
                >
                    <template v-slot:title
                        ><h2 class="usa-card__heading uppercase">{{ variant.bg }} Card</h2></template
                    >
                    This is a card with a {{ variant.bg }} background, {{ variant.txt }} and {{ variant.border }} border.
                </us-card>
            </section>

            <!-- Alerts -->

            <section>
                <us-alert v-for="(variant, index) in mainVariants" :key="index" :variant="variant" class="mb-2">This is a {{ variant }} alert</us-alert>
            </section>
        </us-container>
    </div>
</template>

<script>
export default {
    name: 'style-guide',
    data() {
        return {
            cardVariants: [
                { bg: 'info', txt: 'dark', border: 'info' },
                { bg: 'danger', txt: 'dark', border: 'danger' },
                { bg: 'success', txt: 'dark', border: 'success' },
                { bg: 'warning', txt: 'dark', border: 'warning' },
                { bg: 'light', txt: 'dark', border: 'primary' },
                { bg: 'dark', txt: 'light', border: 'primary' }
            ],
            btnVariants: [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'outline-primary',
                'outline-secondary',
                'outline-info',
                'outline-success',
                'outline-danger',
                'outline-warning',
                'inverse',
                'link'
            ],
            mainVariants: ['primary', 'secondary', 'success', 'warning', 'info', 'danger'],
            variants: [
                'primary',
                'secondary',
                'success',
                'warning',
                'info',
                'danger',
                'dark',
                'light',
                'muted',
                //'transparent',
                'white',
                'black'
            ]
        };
    }
};
</script>
<style lang="scss">
#StyleGuidePage {
    section {
        padding-top: 25px;
        border-top: 1px solid gray;
        margin-top: 25px;
        margin-bottom: 25px;
    }
}
</style>
