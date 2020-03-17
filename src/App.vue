<template>
    <div id="app">
        <SelectExample />
    </div>
</template>

<script>
import SelectExample from './examples/SelectExample';

export default {
    components: {
        SelectExample
    }
};
</script>

<style lang="postcss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

p {
    margin: 0;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
</style>
