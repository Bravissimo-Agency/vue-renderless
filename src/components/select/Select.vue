<script>
export default {
    model: {
        prop: 'active',
        event: 'change'
    },

    props: {
        items: {
            type: Array,
            required: true
        },
        active: {
            type: [Number, String, Boolean],
            default: null
        }
    },

    data: () => ({
        isOpen: false
    }),

    computed: {
        activeItem () {
            return this.items.find(item => item.value === this.active);
        }
    },

    methods: {
        toggle () {
            this.isOpen = !this.isOpen;
        },

        selectItem (item) {
            this.$emit('change', item.value);
            this.isOpen = false;
        }
    },

    render () {
        return this.$scopedSlots.default({
            isOpen: this.isOpen,
            toggle: this.toggle,
            items: this.items,
            selectItem: this.selectItem,
            activeItem: this.activeItem
        });
    }
};
</script>
