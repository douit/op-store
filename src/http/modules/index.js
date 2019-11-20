import axios from '../axios.js'

/* 获取轮播图片 */
export const getCarousel = () => {
    return axios({
        url: '/resouces/index/images',
        method: 'get',
        params: {}
    })
}

/* 获取推荐应用 */
export const getRecommendApp = () => {
    return axios({
        url: '/index/getRecommendApp',
        method: 'get',
        params: {}
    })
}

/* 获取应用基本分类信息 */
export const getClassifyList = () => {
    return axios({
        url: '/index/getClassifyList',
        method: 'get',
        params: {}
    })
}

/* 根据类别获取应用 */
export const getAppByClassify = (categoryId) => {
    return axios({
        url: `/index/getAppByClassify`,
        method: 'get',
        params: {
            categoryId: categoryId
        }
    })
}