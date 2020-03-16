<template>
    <transition
        @enter="slideDown"
        @leave="slideUp"
    >
        <div
            v-show="isOpen"
            class="toggle__contentHolder"
            style="overflow: hidden"
        >
            <slot />
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        transition: {
            type: Number,
            default: 350
        }
    },
    methods: {
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
    }
};
</script>
