<script>
export default {
    model: {
        prop: 'active',
        event: 'change'
    },

    props: {
        id: {
            type: String,
            required: true
        },

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
        },

        buttonId () {
            return `${this.id}__button`;
        },

        listId () {
            return `${this.id}__list`;
        }
    },

    mounted () {
        document.addEventListener('keydown', this.keyListener);
    },

    beforeDestroy () {
        document.removeEventListener('keydown', this.keyListener);
    },

    methods: {
        toggle () {
            this.isOpen = !this.isOpen;
        },

        selectItem (item) {
            this.$emit('change', item.value);
            this.isOpen = false;
        },

        keyListener (event) {
            if (!this.isOpen) { return; }

            if (event.keyCode === 27) {
                this.isOpen = false;
            }
        }
    },

    render () {
        return this.$scopedSlots.default({
            isOpen: this.isOpen,
            toggle: this.toggle,
            items: this.items,
            selectItem: this.selectItem,
            activeItem: this.activeItem,
            buttonId: this.buttonId,
            listId: this.listId
        });
    }
};
</script>
