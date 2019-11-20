<template>
    <div class="app-info">
        <div class="icon">
            <img :src="app.icon" alt="">
        </div>
        <div class="info">
            <p class="title">
                <span>{{ app[`${langStr}_name`] }}</span>
                <i :class="app.isFree?'free':'pay'"></i>
            </p>
            <p>
                <label>{{ lang.index.appInfo.firm }}：</label>
                <span>{{ app.firm }}</span>
            </p>
            <p>
                <label>{{ lang.index.appInfo.userType }}：</label>
                <span>{{ uerTypeHandler(app.userType) }}</span>
            </p>
            <p>
                <label>{{ lang.index.appInfo.updateTime }}：</label>
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
                        if(valueArr[i] == item.id) {
                            res += item[`${this.langStr}_name`] + ','
                        }
                    })
                }
                return res.slice(0,res.length-1)
            }
        }
    }
</script>

<style scoped lang="scss">
    .app-info {
        > div {
            display: inline-block;
            vertical-align: top;
        }

        .icon {
            width: 100px;
            height: 100px;
            margin-right: 20px;
        }
        .icon img {
            width: 100%;
            height: 100%;
        }
        .info {
            width: 210px;
            height: 120px;
            text-align: left;
        }
        .info > .title {
            line-height: 28px;
            font-size: 16px;
            color: #333333;
            font-weight: bold;
        }
        .info > p label {
            font-weight: bold;
        }
        .info:not(:first-of-type) {
            line-height: 25px;
            font-size: 14px;
            color: #666666;
        }
    }
</style>