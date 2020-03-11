<script>
export default {
    props: {
        id: {
            type: [String, Number],
            required: true
        },

        active: {
            type: Boolean,
            required: true
        }
    },

    render (createElement) {
        return createElement(
            'div',
            {
                class: this.elementClass,
                key: `tab-${this.id}`,
                style: {
                    display: !this.active ? 'none' : ''
                },
                attrs: {
                    id: `tab-${this.id}`,
                    role: 'tabpanel',
                    tabindex: '0',
                    hidden: !this.active,
                    'aria-labelledby': this.id
                }
            },
            this.$slots.default
        );
    }
};
</script>
