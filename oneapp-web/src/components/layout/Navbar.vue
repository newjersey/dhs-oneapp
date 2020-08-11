<template>
    <div>
        <!-- Main Nav -->

        <b-navbar id="NavBar" type="dark" variant="dark" v-if="showHeader">
            <b-navbar-brand :to="{ name: 'home' }">
                <img src="/images/nav/state_seal_white.png" width="30px" height="30px" class="d-inline-block nj-seal" alt="NJ Logo" />
                <span class="nav-item ml-2">OFFICIAL SITE OF THE STATE OF NEW JERSEY</span>
            </b-navbar-brand>

            <b-navbar-nav class="ml-auto d-none d-md-inline-block">
                <b-nav-item href="https://nj.gov">return to nj.gov</b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <!-- Sub Navbar -->

        <b-navbar id="NavBar" type="light" variant="transparent">
            <b-navbar-nav>
                <b-nav-item :to="{ name: 'home' }">NJOneApp</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="locale != 'es'" button @click="changeLocale('es')">Espa&ntilde;ol</b-nav-item>
                <b-nav-item v-if="locale != 'en'" button @click="changeLocale('en')">English</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    components: {},
    data() {
        return {
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
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables.scss';
@import '~bootstrap/scss/mixins/_breakpoints.scss';

#NavBar {
    // Only for large screens, see https://www.dev-tips-and-tricks.com/use-bootstrap-4-media-query-mixins
    @include media-breakpoint-up(lg) {
        padding-left: 50px;
        padding-right: 50px;
    }

    font-family: 'Roboto', sans-serif;

    .nav-item {
        font-weight: normal;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 19px;
    }
}
</style>
