<template>
    <li class="usa-nav__primary-item">
        <a class="usa-nav__link" href="javascript:void(0)">
            <span>Simple link</span>
        </a>
    </li>
</template>

<script>

/**
 * USWDS nav link component
 */
export default {
    name: 'us-nav-item',

    props: {
        variant: {
            type: String,
            default: 'info'
        }
    }
};
</script>
