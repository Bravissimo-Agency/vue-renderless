<script>
export default {
    props: {
        ariaLabel: {
            type: String,
            required: true
        }
    },

    render (createElement) {
        return createElement(
            'div',
            {
                class: this.elementClass,
                attrs: {
                    role: 'tablist',
                    'aria-label': this.ariaLabel
                }
            },
            this.$slots.default
        );
    }
};
</script>
