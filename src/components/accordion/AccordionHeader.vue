<template>
    <button
        class="accordionHeader"
        type="button"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script>
export default {

};
</script>
