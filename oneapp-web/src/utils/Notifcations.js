var Notifications = {};

/**
 * @see https://bootstrap-vue.org/docs/components/toast
 *
 * @param {object} Vue The Vue instance
 * @param {object} options
 *      title: Alert title
 *      variant | type: The type, one of the bootstrap variants ('primary', 'info' etc.)
 *      append: The number of milliseconds before the toast auto dismisses itself
 *      autoHideDelay: The number of milliseconds before the toast auto dismisses itself
 */
Notifications.install = function (Vue, options) {
    // Process default options...
    let defaults = {
        title: 'Message',
        type: 'info',
        append: options.append ? options.append : false,
        autoHideDelay: options.autoHideDelay ? options.autoHideDelay : 5000
    };

    function typeToVariant(type) {
        switch (type) {
            case 'error':
                return 'danger';
        }
        return type;
    }

    Vue.notify = Vue.prototype.$notify = function (opts) {
        let options = {
            text: opts.text ? opts.text : '',
            variant: opts.type ? typeToVariant(opts.type) : defaults.type,
            title: opts.title ? opts.title : defaults.title
        };

        // Support for 'variant' instead of type to be compatible with bootstrap-vue
        if (opts.variant) {
            options.variant = opts.variant;
        }

        if (this.$bvToast) {
            this.$bvToast.toast(options.text, {
                title: options.title,
                variant: options.variant,
                appendToast: defaults.append,
                autoHideDelay: defaults.autoHideDelay
            });
        }
    };

    Vue.confirm = Vue.prototype.$confirm = function (txt, callback) {
        if (this.$bvModal.msgBoxConfirm) {
            this.$bvModal
                .msgBoxConfirm(txt, {
                    title: 'Confirm'
                })
                .then(callback);
        }
    };
};

export default Notifications;
