<script>
export default {
    data: () => ({
        isOpen: false
    }),

    methods: {
        toggle () {
            this.isOpen = !this.isOpen;
        }
    },

    render () {
        return this.$scopedSlots.default({
            isOpen: this.isOpen,
            toggle: this.toggle
        });
    }
};
</script>
