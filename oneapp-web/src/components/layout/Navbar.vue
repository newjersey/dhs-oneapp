<template>
    <div id="NavBar">
        <div class="bg-warning pt-1 pb-1" v-if="alertMessage && showHeader">
            <us-container>
                <p class="alert-text m-0"><i class="fas fa-exclamation-triangle mr-2"></i> {{ alertMessage }}</p>
            </us-container>
        </div>

        <!-- Main Navbar -->

        <header class="nav-header bg-dark" v-if="showHeader">
            <us-container>
                <us-row>
                    <us-col>
                        <img src="/images/nav/state_seal_white.png" width="30px" height="30px" class="nj-seal" alt="NJ Logo" />
                        <div class="display-inline nav-item ml-2">OFFICIAL SITE OF THE STATE OF NEW JERSEY</div>
                    </us-col>
                    <us-col align="right">
                        <us-button variant="link" class="nav-item" href="https://nj.gov">return to nj.gov</us-button>
                    </us-col>
                </us-row>
            </us-container>
        </header>

        <!-- Sub Navbar -->

        <header variant="transparent">
            <us-container>
                <us-row>
                    <us-col>
                        <us-button variant="link" class="sub-nav-item" :to="{ name: 'home' }">NJOneApp</us-button>
                    </us-col>
                    <us-col align="right">
                        <us-button variant="link" class="sub-nav-item" v-if="locale != 'es'" button @click="changeLocale('es')">Espa&ntilde;ol</us-button>
                        <us-button variant="link" class="sub-nav-item" v-if="locale != 'en'" button @click="changeLocale('en')">English</us-button>
                    </us-col>
                </us-row>
            </us-container>
        </header>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    components: {},
    data() {
        return {
            alertMessage: 'Alert message, system issues, or emergency information would go here.',
            locale: null
        };
    },
    computed: {
        showHeader() {
            if (this.$route.meta && this.$route.meta.header) {
                return true;
            }
            return false;
        }
    },
    mounted() {
        this.locale = this.$getLocale();
    },
    methods: {
        changeLocale(val) {
            this.locale = val;
            this.$log('Changing locale to ' + this.locale);
            this.$setLocale(val);
        }
    }
};
</script>
<style lang="scss">
$navHeight: 54px;

#NavBar {
    // Only for large screens, see https://www.dev-tips-and-tricks.com/use-bootstrap-4-media-query-mixins
    //@include media-breakpoint-up(lg) {
    //    padding-left: 50px;
    //    padding-right: 50px;
    //}

    .nav-header {
        height: $navHeight;
    }

    font-family: 'Roboto', sans-serif;

    .nj-seal {
        margin-top: 10px;
        float: left;
    }

    .alert-text {
        font-size: 17px;
        letter-spacing: 0;
        line-height: 26px;
    }

    .sub-nav-item {
        text-decoration: none;
        font-weight: normal;
        color: #000000;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 19px;
        margin-top: 32px;
    }

    .nav-item {
        font-weight: normal;
        color: white;
        font-size: 16px;
        letter-spacing: 0;
        line-height: $navHeight;
        width: auto !important;
    }
}
</style>
