<script>
export default {
    model: {
        prop: 'activeTab',
        event: 'change'
    },

    props: {
        activeTab: {
            type: Number || String,
            required: true
        }
    },

    methods: {
        changeTab (id) {
            this.$emit('change', id);
        },

        isTabActive (id) {
            return id === this.activeTab;
        }
    },

    render (createElement) {
        return createElement(
            'div',
            {
                class: this.elementClass
            },
            this.$scopedSlots.default({
                changeTab: this.changeTab,
                isTabActive: this.isTabActive
            })
        );
    }
};
</script>
