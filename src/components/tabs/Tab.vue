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
            'button',
            {
                class: [
                    this.elementClass,
                    this.id === this.activeTab ? 'isActive' : ''
                ],
                key: `tab-${this.id}`,
                attrs: {
                    id: this.id,
                    role: 'tab',
                    tabindex: '-1',
                    'aria-selected': this.active.toString(),
                    'aria-controls': `tab-${this.id}`
                },
                on: {
                    click: () => {
                        this.$emit('change', this.id);
                    }
                }
            },
            this.$slots.default
        );
    }
};
</script>
