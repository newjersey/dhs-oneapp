<template>
    <div class="usa-navbar">
        <div class="usa-logo" id="basic-logo">
            <em class="usa-logo__text">
                <us-button variant="link" :href="href" :to="to" :title="title" :aria-label="title">
                    <slot></slot>
                </us-button>
            </em>
        </div>
        <button class="usa-menu-btn">Menu</button>
    </div>
</template>

<script>

/**
 * USWDS nav link component
 */
export default {
    name: 'us-header-brand',

    props: {
        title: {
            type: String,
            default: 'Home'
        },
        href: {
            type: String,
            default: null            
        },       
        to: {
            type: [String, Object],
            default: null 
        }         
    }
};
</script>
