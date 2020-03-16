<template>
    <button
        :aria-expanded="isOpen.toString()"
        class="accordionHeader"
        type="button"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    }
};
</script>
