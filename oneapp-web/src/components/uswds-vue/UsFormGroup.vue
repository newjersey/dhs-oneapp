<template>

    <div class="usa-form-group" :class="{'usa-form-group--error': valid === false}">

        <label v-if="label" class="usa-label" :for="divId">{{label}}</label>
        
        <!-- Error Message -->
        <span v-if="error" class="usa-error-message" id="input-error-message" role="alert">{{error}}</span>

        <!-- Help text -->
        <span v-if="description" class="usa-hint">
            {{description}}
        </span>

        <slot v-bind="{valid, divId}"></slot>

    </div>
</template>

<script>

/**
 * @see https://designsystem.digital.gov/components/form-controls/#text-input
 */
export default {
    name: 'us-form-group',
    props: {
        divId: {
            type: String,
            default(){
                return `id-` + Math.floor(100 + Math.random()*10000);
            }
        },        
        name: {
            type: String,
            default: ''
        },
        valid: {
            type: Boolean,
            default: null
        },
        label: {
            type: String,
            default: null
        },
        error: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        }
    }
};
</script>
