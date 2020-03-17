<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    data: () => ({
        isOpen: false
    }),

    computed: {
        headerId () {
            return `${this.id}__header`;
        },

        bodyId () {
            return `${this.id}__body`;
        }
    },

    methods: {
        toggle () {
            this.isOpen = !this.isOpen;
        }
    },

    render () {
        return this.$scopedSlots.default({
            isOpen: this.isOpen,
            toggle: this.toggle,
            headerId: this.headerId,
            bodyId: this.bodyId
        });
    }
};
</script>
