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
        </div>
        <div class="all-app block w">
            <div class="title">{{ lang.index.blockTitle[1] }}</div>
        </div>
    </div>
</template>

<script>
    import {message} from '@/utils/message'

    export default {
        name: "index",
        computed: {
            lang: {
                get() {
                    return (this.$store.state.app.lang) === 'zh' ? this.$zh : this.$en
                },
                set(val) {}
            },

        },
        data: function () {
            return {
                carouselImages: [],
                dataBlock: []
            }
        },
        created() {
            this.getCarousel()
            this.initDataBlock()
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
            }
        }
    }
</script>

<style scoped lang="scss">
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
</style>