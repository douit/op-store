<template>
    <div class="header-wrapper">
        <div class="head-box w">
            <el-col :span="3" class="logo">
                {{ lang.header.logo }}
            </el-col>
            <el-col :span="13" class="menu-tab">
                <ul>
                    <li
                            v-for="(item,i) in menuList" :key="item.index" :class="activeIndex===i?'active':''"
                            @click="menuClick($event, item)">
                        <span>{{ lang.header.menu[item.index] }}</span>
                    </li>
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
    import {mapGetters} from 'vuex'

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
        data: function () {
            return {
                menuList: [
                    {path:'/index',index: 0,icon:''},
                    {path:'/center',index: 1,icon:''},
                ],
                activeIndex: 0
            }
        },
        methods: {

            // 语言切换
            toggleLang(e) {
                if (this.$store.state.app.lang === 'zh') {
                    this.$store.dispatch('app/setLang', 'en')
                } else if (this.$store.state.app.lang === 'en') {
                    this.$store.dispatch('app/setLang', 'zh')
                }
            },

            // 菜单切换
            menuClick(e, item) {
                this.activeIndex = item.index
                // $("ul li").eq(i).addClass("active").siblings().removeClass("active")
            }
        }
    }
</script>

<style scoped lang="scss">
    .header-wrapper {
        background-image: url("~@/assets/images/header-bg.png");
        font-size: 16px;
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
        /*width: 100px;*/
        height: 40px;
        padding: 0 20px;
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