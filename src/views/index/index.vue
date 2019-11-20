<template>
    <div>
        <!-- 轮播 -->
        <div class="carousel block w">
            <div class="banner">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in carouselImages" :key="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="data-block">
                <div v-for="b in dataBlock" :class="b.className">
                    <label>{{ b.label }}</label>
                    <div class="content">
                        <span v-for="s in b.span" :class="s.className">{{ s.value }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 推荐应用 -->
        <div class="recom-app block w">
            <div class="title">{{ lang.index.blockTitle[0] }}</div>
            <div class="content">
                <ul>
                    <li v-for="app in recommendApp" :key="app.id">
                        <app-info v-if="classifyList.length > 0" :app="app" :userTypeList="classifyList[1]"></app-info>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 全部应用 -->
        <div class="all-app block w">
            <div class="title">{{ lang.index.blockTitle[1] }}</div>
            <div class="content">
                <div class="classify">
                    <label class="lf">{{ lang.index.classifyList }}：</label>
                    <ul class="lf">
                        <li v-for="item in classifyList[0]" :key="item.id" :class="categoryId===item.id?'active':''">
                            <span>{{ item[`${langStr}_name`] }}</span>
                        </li>
                    </ul>
                </div>
                <div class="app-block">
                    <ul v-for="i in Math.ceil(appBlock.length/rowNum)">
                        <li v-for="(app,j) in appBlock" v-if="j>=(i-1)*rowNum && j<i*rowNum" :key="app.id">
                            <app-info :app="app" :userTypeList="classifyList[1]"></app-info>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import {message} from '@/utils/message'
    import AppInfo from "./AppInfo";

    export default {
        name: "index",
        components: {
            AppInfo
        },
        computed: {
            lang: {
                get() {
                    return (this.$store.state.app.lang) === 'zh' ? this.$zh : this.$en
                },
                set(val) {}
            },
            ...mapGetters({
                langStr: 'lang'
            }),
        },
        data: function () {
            return {
                carouselImages: [], // 轮播图片
                dataBlock: [], // 轮播模块 应用数据
                classifyList: [], // 应用基本分类信息(类型，目标用户，级别)
                recommendApp: [], // 推荐应用
                categoryId: null, // 默认激活应用类型
                appBlock: [], // 全部应用模块展示应用信息
                rowNum: 3, // 每行 显示 3 个应用信息
            }
        },
        created() {
            this.getCarousel()
            this.initDataBlock()
            this.getClassifyList()
            this.getRecommendApp()
        },
        watch: {
            lang() {
                this.initDataBlock()
            }
        },
        methods: {

            // 获取轮播图
            getCarousel() {
                this.$api.index.getCarousel().then(res => {
                    if (res.code === 0) {
                        this.carouselImages = res.data
                    } else {
                        message('warning', res.message)
                    }
                })
            },

            // 初始化 data-block 数据
            initDataBlock() {
                this.dataBlock = [
                    {className: 'total-num', label: this.lang.index.dataBlock[0], span: [{ className: 'value', value: 152},{className:'plus',value:'+'}]},
                    {className: 'app-firm', label: this.lang.index.dataBlock[1], span: [{ className: 'value', value: 48},{className:'plus',value:'+'}]},
                    {className: 'update-time', label: this.lang.index.dataBlock[2], span: [{ className: 'time', value: '2019-11-6'}]}
                ]
            },

            // 获取推荐应用
            getRecommendApp() {
                this.$api.index.getRecommendApp().then(res => {
                    if (res.code === 0) {
                        this.recommendApp = res.data
                    } else {
                        message('warning', res.message)
                    }
                })
            },

            // 获取应用基本分类信息
            getClassifyList() {
                this.$api.index.getClassifyList().then(res => {
                    if (res.code === 0) {
                        this.classifyList = res.data
                        this.categoryId = res.data[0][0].id
                        this.getAppByClassify(this.categoryId)
                    } else {
                        message('warning', res.message)
                    }
                })
            },

            // 获取当前类别下的应用信息
            getAppByClassify(categoryId) {
                this.$api.index.getAppByClassify(categoryId).then(res => {
                    if (res.code === 0) {
                        this.appBlock = res.data
                    } else {
                        message('warning', res.message)
                    }
                })
            },
        }
    }
</script>

<style scoped lang="scss">

    /* 应用列表 */
    .recom-app .content, .all-app .app-block {
        height: 143px;
        overflow: hidden;
        > ul {
            height: 143px;
        }
        > ul > li {
            float: left;
            box-sizing: border-box;
            border: 1px solid #dddddd;
            border-radius: 6px;
            padding: 20px 20px 0;
        }
        > ul > li:not(:first-of-type) {
            margin-left: 22px;
        }
    }

    /* 轮播*/
    .carousel {
        height: 340px;
        > div {
            display: inline-block;
            height: 300px;
            vertical-align: middle;
        }
        .banner {
            width: 930px;
            margin-right: 20px;
        }
        .data-block {
            width: 210px;
        }
        .data-block > div {
            height: 86px;
            color: #fff;
            background-image: url("http://www.jxeduyun.com/edc-store-web/resources/index/images/block_data_bg.png");
        }
        .data-block > div:after {
            display: inline-block;
            content: "";
            height: 100%;
            vertical-align: middle;
        }
        .data-block > div:not(:last-of-type) {
            margin-bottom: 21px;
        }
        .data-block > div:nth-child(2) {
            background-position: 0 -117px;
        }
        .data-block > div:nth-child(3) {
            background-position: 0 -234px;
        }
        .data-block > div > label {
            display: inline-block;
            font-size: 14px;
            width: 100%;
            height: 20px;
            margin-top: 10px;
        }
        .data-block   .content > span:nth-child(1) {
            font-size: 36px;
        }
        .data-block   .content > span:nth-child(2) {
            font-size: 25px;
        }
        .data-block   .content span.time {
            font-size: 24px;
            line-height: 54px;
        }
    }

    /* 推荐应用 */
    .recom-app {
        height: 250px;
    }

    /* 全部应用 */
    .all-app {
        .content .classify {
            box-sizing: border-box;
            height: 56px;
            line-height: 32px;
            border: 1px solid #eeeeee;
            border-radius: 6px;
            font-size: 16px;
            padding: 11px 20px;
        }
        .content .classify > label {
            color: #666666;
            font-weight: bold;
        }
        .content .classify li {
            float: left;
            width: 120px;
            cursor: pointer;
        }
        .content .classify li.active {
            color: #3088ec;
        }
        .app-block {
            margin-top: 17px;
        }
    }
</style>