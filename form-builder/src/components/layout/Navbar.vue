<template>
    <b-navbar id="NavBar" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
                <b-nav-item :to="{name:'home'}">Home</b-nav-item>
                <b-nav-item :to="{name:'builder'}">Builder</b-nav-item>
                <b-nav-item :to="{name:'config'}">Config</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'navbar',
    components: {}
};
</script>
<style lang="scss">
#NavBar {
}
</style>
