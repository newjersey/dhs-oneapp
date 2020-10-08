<template>
    <div id="nj-oneapp">
        <!--
        <us-responsive-info />
        -->
        <navbar />
        <router-view class="main-view" />
        <footer-bar />
    </div>
</template>
<script>
import uswds from 'uswds/dist/js/uswds.min.js';
import Navbar from '@/components/layout/Navbar.vue';
import FooterBar from '@/components/layout/FooterBar.vue';

export default {
    name: 'nj-oneapp',
    components: {
        Navbar,
        FooterBar
    }
};
</script>
<style lang="scss">
@import './styles/global.scss';
#nj-oneapp {
    height: 100%;
    .main-view {
        min-height: calc(100vh - 350px);
    }
}
</style>
