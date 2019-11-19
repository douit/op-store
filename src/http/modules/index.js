import axios from '../axios.js'

/* 获取轮播图片 */
export const getCarousel = () => {
    return axios({
        url: '/resouces/index/images',
        methods: 'get',
        params: {}
    })
}

/* 获取推荐应用 */
export const getRecomApp = () => {
    return axios({
        url: '/index/getRecomApp',
        methods: 'get',
        params: {}
    })
}

/* 获取全部应用 */
export const getAllApp = (data) => {
    return axios({
        url: '/index/getAllApp',
        methods: 'post',
        data
    })
}