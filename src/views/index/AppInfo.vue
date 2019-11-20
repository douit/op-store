<template>
    <div>
        <div class="icon">
            <img :src="app.icon" alt="">
        </div>
        <div class="info">
            <p>
                <span>{{ app[`${langStr}_name`] }}</span>
                <i :class="app.isFree?'free':'pay'"></i>
            </p>
            <p>
                <span>{{ lang.index.appInfo.firm }}：</span>
                <span>{{ app.firm }}</span>
            </p>
            <p>
                <span>{{ lang.index.appInfo.userType }}：</span>
                <span>{{ uerTypeHandler(app.userType) }}</span>
            </p>
            <p>
                <span>{{ lang.index.appInfo.updateTime }}：</span>
                <span>{{ app.updateTime }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "AppInfo",
        props: {
            app: Object,
            userTypeList: Array
        },
        computed: {
            ...mapGetters({
                langStr: 'lang'
            }),
            lang: {
                get() {
                    return (this.$store.state.app.lang) === 'zh' ? this.$zh : this.$en
                },
                set(val) {}
            },
        },
        methods: {

            // 目标用户字段处理
            uerTypeHandler(value) {
                let res = ''
                let valueArr = value.split(',')
                for(let i=0; i<valueArr.length; i++) {
                    this.userTypeList.forEach(item => {
                        if(valueArr === item.id) {
                            res += item[`${this.langStr}_name`]
                        }
                    })
                }
                return res
            }
        }
    }
</script>

<style scoped>

</style>