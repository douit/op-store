<template>
    <div class="header">
        <div class="head-box w">
            <el-col :span="3" class="logo">
                {{ lang.header.logo }}
            </el-col>
            <el-col :span="13" class="menu-tab">
                <ul>
                    <li class="active">{{ lang.header.menu[0] }}</li>
                    <li>{{ lang.header.menu[1] }}</li>
                </ul>
            </el-col>
            <el-col :span="8" class="login">
                <span>{{ lang.header.login }}</span>
                <span @click="toggleLang">{{ ($store.state.app.lang)==='zh'?'En':'中' }}</span>
            </el-col>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Header",
        computed: {
            ...mapGetters({
                lang: 'lang'
            }),
            lang: {
                get() {
                    return (this.$store.state.app.lang) === 'zh' ? this.$zh : this.$en
                },
                set(val) {}
            }
        },
        methods: {

            // 语言切换
            toggleLang(e) {
                if(this.$store.state.app.lang === 'zh'){
                    this.$store.dispatch('app/setLang', 'en')
                } else if(this.$store.state.app.lang === 'en'){
                    this.$store.dispatch('app/setLang', 'zh')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        background-image: url("~@/assets/images/header-bg.png")
    }

    .head-box {
        height: 120px;
        margin: 0 auto;

        > div {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-top: 40px;
        }
    }
    .head-box .logo {
        text-align: left;
    }
    .head-box .login {
        text-align: right;

        span {
            display: inline-block;
            width: 60px;
            cursor: pointer;
            text-align: center;
        }
    }
    .head-box .menu-tab li {
        float: left;
        width: 100px;
        height: 40px;
        cursor: pointer;
    }
    .head-box .menu-tab li:not(:last-of-type) {
        margin-right: 40px;
    }
    .head-box .menu-tab li.active {
        border-radius: 20px;
        background-color: #3088ec;
    }
</style>