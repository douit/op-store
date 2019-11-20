<template>
    <div class="footer-wrapper">
        <span>{{ lang.footer.copyright }}</span>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        computed: {
            lang: {
                get() {
                    return (this.$store.state.app.lang) === 'zh' ? this.$zh : this.$en
                },
                set(val) {}
            },
        },
    }
</script>

<style scoped>
    .footer-wrapper {
        background-color: #2E3033;
        color: #999;
        height: 38px;
        line-height: 38px;
        text-align: center;
    }
</style>