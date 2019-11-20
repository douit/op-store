import Mock from 'mockjs'
import axios from "../../http/axios";

// 应用类别
const options = [
    [
        {id: 0, zh_name: '教育管理', en_name: 'EduManage', disOrder: 0},
        {id: 1, zh_name: '教学应用', en_name: 'TeachApp', disOrder: 1},
        {id: 2, zh_name: '教研应用', en_name: 'ResearchApp', disOrder: 2},
        {id: 3, zh_name: '在线学习', en_name: 'StudyOnline', disOrder: 3},
        {id: 4, zh_name: '互动交流', en_name: 'Interaction', disOrder: 4},
        {id: 5, zh_name: '央馆应用', en_name: 'CentralApp', disOrder: 5},
        {id: 6, zh_name: '体系应用', en_name: 'SystemApp', disOrder: 6},
    ],
    [
        {id: 2, zh_name: '教师', en_name: 'teacher'},
        {id: 3, zh_name: '家长', en_name: 'guardian'},
        {id: 4, zh_name: '学生', en_name: 'student'},
        {id: 101, zh_name: '机构用户', en_name: 'staff'},
        {id: 107, zh_name: '教研员', en_name: 'researcher'},
    ],
    [
        {levelCode: 40, levelName: '国家级'},
        {levelCode: 41, levelName: '省级'},
        {levelCode: 42, levelName: '市级'},
        {levelCode: 43, levelName: '区级'},
        {levelCode: 44, levelName: '校级'},
    ]
];

// 所有应用
const allApp = [
    {id: 1,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 2,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 3,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 4,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 5,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 6,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 7,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 8,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
    {id: 9,zh_name: '赣教云盘',en_name: 'Martyrdom Cloud Disk',firm: '',userType: '2,3,4',describe: '',updateTime: '2019-10-29',appOrigin: 0,appLevel: 40,icon: 'http://store.jxeduyun.com/resource/showImg?path=/storeAppIcon/1ab1435e-573d-43c2-bce7-bb3827b40c10.png', isFree: true},
];

// 轮播图片
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

// 推荐应用
function getRecommendApp() {
    const data = {
        code: 200,
        message: '请求成功',
        data: [allApp[0], allApp[1], allApp[2]]
    }
    return {
        url: '/index/getRecommendApp',
        method: 'get',
        response: (params) => {
            return data
        }
    }
}

// 应用类别信息
function getClassifyList() {
    const data = {
        code: 200,
        message: '请求成功',
        data: options
    }
    return {
        url: '/index/getClassifyList',
        method: 'get',
        response: (params) => {
            return data
        }
    }
}

// 根据类别获取应用
function getAppByClassify() {
    const data = {
        code: 200,
        message: '请求成功',
        data: []
    }
    return {
        url: '/index/getAppByClassify',
        method: 'get',
        response: (params) => {
            console.log(params);
            data.data = allApp.filter(item => item.appOrigin == params.categoryId)
            return data
        }
    }
}

export default [
    // 立即执行函数
    (getCarousel)(),
    (getRecommendApp)(),
    (getClassifyList)(),
    (getAppByClassify)(),
]