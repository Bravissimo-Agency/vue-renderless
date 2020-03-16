<template>
    <button
        class="accordion__header"
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
