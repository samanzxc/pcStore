<script setup>
import headers from './components/headers.vue'
import mains from './components/mains.vue';
import footers from './components/footers.vue';
</script>

<template>
    <div class="app-container">
        <headers/>
        <mains/>
        <footers/>
    </div>
</template>

<style scoped>
.app-container {
    overflow-x: hidden;
}
</style>
