<template>
    <div id="NotFoundPage" align="center">
        <div class="text-1">404 Page</div>
        <div class="text-2">Uh oh, looks like we made a wrong turn.</div>
        <div class="text-3">
            No worries, head over to our
            <router-link :to="{ name: 'home' }">homepage</router-link> or use the menu to find your way again!
        </div>
    </div>
</template>

<script>
export default {
    name: 'not-found'
};
</script>

<style lang="scss" scoped>
#NotFoundPage {
    .text-1 {
        margin-top: 200px;
        font-size: 24px;
        color: gray;
    }

    .text-2 {
        margin-top: 20px;
        font-size: 50px;
    }

    .text-3 {
        margin-top: 20px;
        font-size: 24px;
        color: gray;
    }
}
</style>
