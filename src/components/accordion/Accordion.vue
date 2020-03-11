<script>
export default {
    props: {
        transition: {
            type: Number,
            default: 350
        }
    },

    data: () => ({
        isOpen: false
    }),

    methods: {
        toggle () {
            this.isOpen = !this.isOpen;
        },

        slideDown (el, done) {
            el.style.transition = `${this.transition}ms`;
            el.style.height = 0;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.height = `${el.firstChild.offsetHeight}px`;
                });
            });

            setTimeout(() => {
                el.style.height = '';
                done();
            }, this.transition);
        },

        slideUp (el, done) {
            el.style.height = `${el.firstChild.offsetHeight}px`;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.height = 0;
                });
            });

            setTimeout(() => {
                done();
            }, this.transition);
        }
    },

    render () {
        return this.$scopedSlots.default({
            isOpen: this.isOpen,
            toggle: this.toggle,
            slideDown: this.slideDown,
            slideUp: this.slideUp
        });
    }
};
</script>
