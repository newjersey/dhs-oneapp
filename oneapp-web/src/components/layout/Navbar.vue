<template>
    <div>

        <us-official-header />

        <!-- Main Nav -->
        <us-header>

            <us-header-brand :to="{ name: 'home' }">
                <img src="/images/nav/state_seal_white.png" width="30px" height="30px" class="d-inline-block nj-seal" alt="NJ Logo" />
                <span class="nav-item ml-2">OFFICIAL SITE OF THE STATE OF NEW JERSEY</span>
            </us-header-brand>

            <us-header-nav class="ml-auto d-none d-md-inline-block">
                <us-nav-item href="https://nj.gov">return to nj.gov</us-nav-item>
            </us-header-nav>

        </us-header>
<!--
        <us-navbar id="NavBar" type="dark" variant="dark" v-if="showHeader">

            <us-navbar-brand :to="{ name: 'home' }">
                <img src="/images/nav/state_seal_white.png" width="30px" height="30px" class="d-inline-block nj-seal" alt="NJ Logo" />
                <span class="nav-item ml-2">OFFICIAL SITE OF THE STATE OF NEW JERSEY</span>
            </us-navbar-brand>

            <us-navbar-nav class="ml-auto d-none d-md-inline-block">
                <us-nav-item href="https://nj.gov">return to nj.gov</us-nav-item>
            </us-navbar-nav>
        </us-navbar>
-->


        <!-- Sub Navbar -->
<!--
        <us-navbar id="NavBar" type="light" variant="transparent">
            <us-navbar-nav>
                <us-nav-item :to="{ name: 'home' }">NJOneApp</us-nav-item>
            </us-navbar-nav>

            <us-navbar-nav class="ml-auto">
                <us-nav-item v-if="locale != 'es'" button @click="changeLocale('es')">Espa&ntilde;ol</us-nav-item>
                <us-nav-item v-if="locale != 'en'" button @click="changeLocale('en')">English</us-nav-item>
            </us-navbar-nav>
        </us-navbar>
-->
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

#NavBar {
    
    // Only for large screens, see https://www.dev-tips-and-tricks.com/use-bootstrap-4-media-query-mixins
    //@include media-breakpoint-up(lg) {
    //    padding-left: 50px;
    //    padding-right: 50px;
    //}

    font-family: 'Roboto', sans-serif;

    .nav-item {
        font-weight: normal;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 19px;
    }
}
</style>
