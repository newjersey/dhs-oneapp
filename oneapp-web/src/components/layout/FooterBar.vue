<template>
    <footer id="FooterBar" v-if="showFooter">
        <nav class="navbar navbar-default navbar-bottom" role="navigation">
            <us-container>
                <us-row>
                    <us-col class="d-none d-sm-block">
                        <us-img src="/images/footer/logo_nj_snap_tanf.png" fluid class="d-none d-lg-block" alt="NJ, Snap and TANF Logos" />
                        <us-img src="/images/footer/logo_nj_snap.png" fluid class="d-none d-sm-block d-lg-none" alt="NJ, Snap Logos" />
                    </us-col>
                    <us-col>
                        <us-row cols="2" align-v="end" align-content="end">
                            <us-col lg="4" xl="3">
                                <us-button variant="link" class="p-0" href="tel:800-687-9512">(800) 687-9512</us-button>
                            </us-col>
                            <us-col lg="4" xl="3">
                                <!-- TODO: get/confirm link -->
                                <us-button variant="link" class="p-0" href="https://twitter.com/NJDHS">@NJDHS</us-button>
                            </us-col>
                            <us-col lg="4" xl="3">
                                <us-button variant="link" class="p-0" href="https://nj.gov/nj/privacy.html">Privacy Notice</us-button>
                            </us-col>
                            <us-col lg="4" xl="3">
                                <us-button variant="link" class="p-0" href="https://nj.gov/nj/accessibility.html">Accessibility</us-button>
                            </us-col>
                            <us-col lg="4" xl="3">
                                <us-button variant="link" class="p-0" href="https://nj.gov/nj/legal.html">Legal Policy</us-button>
                            </us-col>
                            <us-col lg="4" xl="3">
                                <!-- TODO: get link -->
                                <us-button variant="link" class="p-0" href="">Nondiscrimination</us-button>
                            </us-col>
                        </us-row>

                        <div class="mt-3">
                            <p>
                                The New Jersey Department of Human Services (DHS) provides numerous programs and services designed to give individuals and families the help they
                                need for economic and health challenges.
                            </p>
                        </div>
                    </us-col>
                </us-row>

                <div align="right">
                    <span class="text-muted small">v{{ version }}</span>
                </div>
            </us-container>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'footer-bar',
    components: {},
    data() {
        return {
            version: process.env.VUE_APP_VERSION
        };
    },
    computed: {
        showFooter() {
            if (this.$route.meta && this.$route.meta.footer) {
                return true;
            }
            return false;
        }
    },
    methods: {
        onSelectSpanish() {}
    }
};
</script>
<style lang="scss">
#FooterBar {
    padding-top: 38px;
    border-top: 5px solid #53a7de;
    background-color: #d6d6d6;

    .navbar {
        font-family: 'Roboto', sans-serif;
        min-height: 200px;

        .footer-img-col {
            height: 105px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center top;
        }

        .footer-img {
            height: 105px;
        }

        .btn-link {
            text-decoration: underline;
            overflow-x: visible;
            min-width: 100px;
            text-align: left;
        }

        .btn-link,
        p {
            color: black;
            font-size: 14px;
            letter-spacing: 0;
            line-height: 16px;
            font-weight: 400;
            margin-bottom: 5px;
        }

        .nav-item {
            font-weight: normal;
            font-size: 16px;
            letter-spacing: 0;
            line-height: 19px;
        }
    }
}
</style>
