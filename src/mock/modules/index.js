import Mock from 'mockjs'
import axios from "../../http/axios";

const options = {
    type: [
        {value: 0, label: '教育管理'},
        {value: 1, label: '教学应用'},
        {value: 2, label: '教研应用'},
        {value: 3, label: '在线学习'},
        {value: 4, label: '互动交流'},
        {value: 5, label: '央馆应用'},
        {value: 6, label: '体系应用'},
    ],
    districtType: [
        {value: 0, label: 'province'},
        {value: 1, label: 'city'},
        {value: 2, label: 'school'},
    ]
}

const allApp = [
    {name: '赣教云盘', firm: '', userType: '教师，学生，家长', describe: '', updateTime: '2019-10-29', districtType: 0, type: 0, isFree: true},
    {name: '赣教云盘', firm: '', userType: '教师，学生，家长', describe: '', updateTime: '2019-10-29', districtType: 1, type: 0, isFree: false},
    {name: '赣教云盘', firm: '', userType: '教师，学生，家长', describe: '', updateTime: '2019-10-29', districtType: 2, type: 0, isFree: true},
    {name: '赣教云盘', firm: '', userType: '教师，学生，家长', describe: '', updateTime: '2019-10-29', districtType: 3, type: 0, isFree: false},
    {name: '赣教云盘', firm: '', userType: '教师，学生，家长', describe: '', updateTime: '2019-10-29', districtType: 4, type: 0, isFree: true},
    {name: '赣教云盘', firm: '', userType: '教师，学生，家长', describe: '', updateTime: '2019-10-29', districtType: 5, type: 0, isFree: false},
    {name: '赣教云盘', firm: '', userType: '教师，学生，家长', describe: '', updateTime: '2019-10-29', districtType: 6, type: 0, isFree: true},
]

function getCarousel() {
    const data = {
        code: 200,
        message: '请求成功',
        data: [
            'http://www.jxeduyun.com/edc-store-web/resources/index/images/index-banner-bg1.png',
            'http://www.jxeduyun.com/edc-store-web/resources/index/images/index-banner-bg2.png',
            'http://www.jxeduyun.com/edc-store-web/resources/index/images/index-banner-bg3.png'
        ]
    }
    return {
        url: '/resouces/index/images',
        method: 'get',
        response: (params) => {
            return data
        }
    }
}

function getRecomApp() {
    const data = {
        code: 200,
        message: '请求成功',
        data: [
            'http://www.jxeduyun.com/edc-store-web/resources/index/images/index-banner-bg1.png',
            'http://www.jxeduyun.com/edc-store-web/resources/index/images/index-banner-bg2.png',
            'http://www.jxeduyun.com/edc-store-web/resources/index/images/index-banner-bg3.png'
        ]
    }
    return {
        url: '/index/getRecomApp',
        method: 'post',
        response: (params) => {
            return data
        }
    }
}

export default [
    // 立即执行函数
    (getCarousel)()
    (getRecomApp)()
]