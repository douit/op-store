<template>
    <div class="main-wrapper">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "MainContent"
    }
</script>

<style scoped>
    .main-wrapper {
        padding-bottom: 50px;
    }
</style>